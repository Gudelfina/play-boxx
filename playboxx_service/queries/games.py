from pydantic import BaseModel
from typing import List
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
    def create_game(self, games: GameIn) -> GameOut:
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

    def get_all_games(self) -> List[GameOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id, name, description, picture_url
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
