from fastapi import (
    APIRouter,
    Depends,
    Response,
    )
from queries.games import GameIn, GameOut, GameRepository, Error
from typing import List, Union, Optional


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


@router.delete("/games/{game_id}", response_model=bool)
def delete_game(
    game_id: int,
    repo: GameRepository = Depends(),
) -> bool:
    return repo.delete_game(game_id)

@router.get("/games/{game_id}", response_model=Optional[GameOut])
def get_one_game(
    game_id: int,
    response: Response,
    repo: GameRepository = Depends(),
) -> GameOut:
    game = repo.get_one_game(game_id)
    if game is None:
        response.status_code = 404
    return game
