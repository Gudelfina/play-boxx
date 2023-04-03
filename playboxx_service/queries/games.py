from pydantic import BaseModel
from queries.pool import pool


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
