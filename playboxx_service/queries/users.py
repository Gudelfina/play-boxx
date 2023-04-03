from pydantic import BaseModel
from queries.pool import pool
from typing import Optional


class DuplicateUserError(ValueError):
    pass


class UserIn(BaseModel):
    first_name: str
    last_name: str
    username: str
    password: str
    email: str
    profile_picture: str


class UserUpdate(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    username: Optional[str]
    email: Optional[str]
    password: Optional[str]
    profile_picture: Optional[str]


class UserOut(BaseModel):
    id: str
    first_name: str
    last_name: str
    username: str
    email: str
    profile_picture: str


class UserOutWithPassword(UserOut):
    hashed_password: str


class UserRepository:
    def create_user(
        self, users: UserIn, hashed_password: str
    ) -> UserOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                params = [
                    users.first_name,
                    users.last_name,
                    users.username,
                    hashed_password,
                    users.email,
                    users.profile_picture,
                ]
                result = db.execute(
                    """
                    INSERT INTO users
                        (first_name, last_name, username, hashed_password, email, profile_picture)
                    VALUES
                        (%s, %s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    params,
                )
                id = result.fetchone()[0]
                old_data = users.dict()
                return UserOutWithPassword(
                    id=id, **old_data, hashed_password=hashed_password
                )

    def get_user(self, username: str) -> UserOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id,
                            first_name,
                            last_name,
                            username,
                            hashed_password,
                            email,
                            profile_picture
                    FROM users
                    WHERE username = %s
                    or email = %s;
                    """,
                    [username,
                     username,
                    ],
                )
                user = result.fetchone()
                if user is None:
                    return None
                return UserOutWithPassword(
                    id=user[0],
                    first_name=user[1],
                    last_name=user[2],
                    username=user[3],
                    hashed_password=user[4],
                    email=user[5],
                    profile_picture=user[6],
                )

    def delete_user(self, id: int):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM users
                    WHERE id = %s
                    """,
                    [id],
                )

    def update_user(
        self, id: int, users: UserUpdate, hashed_password: str
    ) -> UserOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                params = [
                    users.first_name,
                    users.last_name,
                    users.username,
                    hashed_password,
                    users.email,
                    users.profile_picture,
                    id,
                ]
                db.execute(
                    """
                    UPDATE users
                    SET first_name = %s,
                        last_name = %s,
                        username = %s,
                        hashed_password = %s,
                        email = %s,
                        profile_picture = %s
                    WHERE id = %s
                    """,
                    params,
                )
                old_data = users.dict()
                return UserOutWithPassword(
                    id=id, **old_data, hashed_password=hashed_password
                )
