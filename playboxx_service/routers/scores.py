from fastapi import (
    APIRouter,
    Depends,
    Response,
    )
from queries.scores import (
    ScoreIn,
    ScoreOut,
    ScoreRepository,
    Error,
    ScoreOutWithUserAndGame)
from typing import List, Union, Optional


router = APIRouter()


@router.post("/scores", response_model=Union[ScoreOut, Error])
def create_score(score: ScoreIn, repo: ScoreRepository = Depends()):
    return repo.create_score(score)

@router.get("/scores", response_model=List[ScoreOutWithUserAndGame])
def get_all_scores(repo: ScoreRepository = Depends()):
    return repo.get_all_scores()
