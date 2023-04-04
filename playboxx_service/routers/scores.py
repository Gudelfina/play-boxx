from fastapi import (
    APIRouter,
    Depends,
    Response,
    )
from queries.scores import ScoreIn, ScoreOut, ScoreRepository, Error
from typing import List, Union, Optional


router = APIRouter()


@router.post("/scores", response_model=ScoreOut)
def create_score(score: ScoreIn, repo: ScoreRepository = Depends()):
    return repo.create_score(score)
