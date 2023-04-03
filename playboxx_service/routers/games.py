from fastapi import (
    APIRouter,
    Depends
    )
from queries.games import GameIn, GameOut, GameRepository
from typing import List


router = APIRouter()


@router.post("/games", response_model=GameOut)
def create_game(game: GameIn, queries: GameRepository = Depends()):
    return queries.create_game(game)


@router.get("/games", response_model=List[GameOut])
def get_all(
    repo: GameRepository = Depends(),
):
    return repo.get_all_games()
