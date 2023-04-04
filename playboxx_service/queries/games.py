from pydantic import BaseModel
from typing import List, Union, Optional
from queries.pool import pool


class Error(BaseModel):
    message: str


class GameIn(BaseModel):
    name: str
    description: str
    picture_url: str


class GameOut(BaseModel):
    id: str
    name: str
    description: str
    picture_url: str


class GameRepository:
    def create_game(self, games: GameIn) -> Union[Error, GameOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    params = [
                        games.name,
                        games.description,
                        games.picture_url,
                    ]
                    result = db.execute(
                        """
                        INSERT INTO games
                            (name, description, picture_url)
                        VALUES
                            (%s, %s, %s)
                        RETURNING id;
                        """,
                        params,
                    )
                    id = result.fetchone()[0]
                    old_data = games.dict()
                    return GameOut(
                        id=id, **old_data
                    )
        except Exception:
            return {"message": "Could not create game"}

    def get_all_games(self) -> Union[Error, List[GameOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id
                             , name
                             , description
                             , picture_url
                        FROM games;
                        """
                    )
                    return [
                        GameOut(
                            id=record[0],
                            name=record[1],
                            description=record[2],
                            picture_url=record[3],
                        )
                        for record in db
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all games"}

    def update_game(self, game_id: int, game: GameIn) -> Union[GameOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    params = [
                        game.name,
                        game.description,
                        game.picture_url,
                        game_id,
                    ]
                    db.execute(
                        """
                        UPDATE games
                        SET name = %s
                            , description = %s
                            , picture_url = %s
                        WHERE id = %s;
                        """,
                        params,
                    )
                    old_data = game.dict()
                    return GameOut(id=game_id, **old_data)
        except Exception as e:
            print(e)
            return {"message": "could not update game"}

    def delete_game(self, game_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM games
                        WHERE id = %s
                        """,
                        [game_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return {"message": "could not delete game"}

    def get_one_game(self, game_id: int) -> Optional[GameOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                                , name
                                , description
                                , picture_url
                        FROM games
                        WHERE id = %s
                        """,
                        [game_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    return GameOut(
                        id=record[0],
                        name=record[1],
                        description=record[2],
                        picture_url=record[3],
                    )
        except Exception as e:
            print(e)
            return {"message": "Could not get that game"}
