from pydantic import BaseModel
from typing import List, Union, Optional
from queries.pool import pool
from queries.users import UserOut
from queries.games import GameOut
from datetime import datetime


class Error(BaseModel):
    message: str


class ScoreIn(BaseModel):
    score: int
    player_id: int
    game_id: int
    time_completed: str


class ScoreOut(BaseModel):
    id: int
    score: int
    player_id: int
    game_id: int
    time_completed: str


class ScoreOutWithUserAndGame(BaseModel):
    id: int
    score: int
    time_completed: str
    played_on: datetime
    player_id: UserOut
    game_id: GameOut


class ScoreRepository:
    def create_score(self, score: ScoreIn) -> Union[ScoreOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    params = [
                        score.score,
                        score.player_id,
                        score.game_id,
                        score.time_completed,
                    ]
                    result = db.execute(
                        """
                        INSERT INTO scores
                            (score, player_id, game_id, time_completed)
                        VALUES
                            (%s, %s, %s, %s)
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

    def get_all_scores(self) -> Union[List[ScoreOutWithUserAndGame], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT s.id, s.score, s.played_on, s.time_completed, u.id, u.first_name, u.last_name, u.username, u.email, u.profile_picture, g.*
                        FROM scores s
                        INNER JOIN users u ON s.player_id = u.id
                        INNER JOIN games g ON s.game_id = g.id
                        ORDER BY s.score DESC, CAST(s.time_completed as int)
                        LIMIT 10;
                        """,
                    )
                    result = []
                    for record in db:
                        player_dict = {
                            "id": record[4],
                            "first_name": record[5],
                            "last_name": record[6],
                            "username": record[7],
                            "email": record[8],
                            "profile_picture": record[9]
                        }
                        game_dict = {
                            "id": record[10],
                            "name": record[11],
                            "description": record[12],
                            "picture_url": record[13]
                        }
                        score = ScoreOutWithUserAndGame(
                            id=record[0],
                            score=record[1],
                            played_on=record[2],
                            time_completed=record[3],
                            player_id=player_dict,
                            game_id=game_dict,
                        )
                        result.append(score)
                    return result
        except Exception as e:
            print(e)
            return {"message": "Could not get all scores"}

    def delete_score(self, score_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM scores
                        WHERE id = %s
                        """,
                        [score_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return {"message" : "could not delete score"}
