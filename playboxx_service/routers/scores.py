from fastapi import (
    APIRouter,
    Depends,
)
from queries.scores import (
    ScoreIn,
    ScoreOut,
    ScoreRepository,
    Error,
    ScoreOutWithUserAndGame,
)
from typing import List, Union
from authenticator import authenticator


router = APIRouter()


@router.post("/scores", response_model=Union[ScoreOut, Error])
def create_score(
    score: ScoreIn,
    repo: ScoreRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.create_score(score)


@router.get("/scores", response_model=List[ScoreOutWithUserAndGame])
def get_all_scores(repo: ScoreRepository = Depends()):
    return repo.get_all_scores()


@router.delete("/scores/{score_id}", response_model=bool)
def delete_score(
    score_id: int,
    repo: ScoreRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
) -> bool:
    return repo.delete_score(score_id)
