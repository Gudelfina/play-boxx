from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)

from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from queries.users import UserOutWithPassword

router = APIRouter()

from queries.users import (
    UserIn,
    UserOut,
    UserRepository,
    DuplicateUserError,
    UserUpdate,
)


class UserForm(BaseModel):
    username: str
    password: str


class UserToken(Token):
    user: UserOut


class HttpError(BaseModel):
    detail: str


@router.get("/token", response_model=UserToken | None)
async def get_token(
    request: Request,
    user: UserOutWithPassword = Depends(
        authenticator.try_get_current_account_data
    ),
) -> UserToken | None:
    if user and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "user": user,
        }


@router.post("/api/users", response_model=UserToken | HttpError)
async def create_user(
    info: UserIn,
    request: Request,
    response: Response,
    users: UserRepository = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)

    try:
        user = users.create_user(info, hashed_password)
    except DuplicateUserError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create a user with those credentials",
        )
    form = UserForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, users)
    return UserToken(user=user, **token.dict())


@router.delete("/api/users/{id}", response_model=bool)
def delete_user(id: int, queries: UserRepository = Depends()):
    queries.delete_user(id)
    return True


@router.put("/api/users/{id}", response_model=UserOut)
def update_user(
    id: int, user: UserUpdate, queries: UserRepository = Depends()
):
    hashed_password = authenticator.hash_password(user.password)
    record = queries.update_user(id, user, hashed_password)
    return record
