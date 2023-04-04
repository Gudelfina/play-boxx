from pydantic import BaseModel
from typing import List, Union, Optional
from queries.pool import pool


class Error(BaseModel):
    message: str


class ScoreIn(BaseModel):
    score: int
    player_id: int
    game_id: int


class ScoreOut(BaseModel):
    id: int
    score: int
    player_id: int
    game_id: int


class ScoreRepository:
    def create_score(self, score: ScoreIn) -> Union[ScoreOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    params = [
                        score.score,
                        score.player_id,
                        score.game_id,
                    ]
                    result = db.execute(
                        """
                        INSERT INTO scores
                            (score, player_id, game_id)
                        VALUES
                            (%s, %s, %s)
                        RETURNING id;
                        """,
                        params,
                    )
                    id = result.fetchone()[0]
                    old_data = score.dict()
                    return ScoreOut(
                        id=id, **old_data
                    )
        except Exception:
            return {"message": "Could not create score"}
