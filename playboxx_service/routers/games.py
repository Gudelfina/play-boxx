from fastapi import (
    APIRouter,
    Depends
    )
from queries.games import GameIn, GameOut, GameRepository



router = APIRouter()


@router.post("/games", response_model=GameOut)
def create_game(game: GameIn, queries: GameRepository = Depends()):
    return queries.create_game(game)
