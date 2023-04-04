from fastapi import (
    APIRouter,
    Depends
    )
from queries.games import GameIn, GameOut, GameRepository, Error
from typing import List, Union



router = APIRouter()


@router.post("/games", response_model=GameOut)
def create_game(game: GameIn, repo: GameRepository = Depends()):
    return repo.create_game(game)


@router.get("/games", response_model=Union[List[GameOut], Error])
def get_all(
    repo: GameRepository = Depends(),
):
    return repo.get_all_games()


@router.patch("/games/{game_id}", response_model=Union[GameOut, Error])
def update_game(
    game_id: int,
    game: GameIn,
    repo: GameRepository = Depends(),
):
    return repo.update_game(game_id, game)
