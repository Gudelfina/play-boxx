from fastapi.testclient import TestClient
from main import app
from queries.scores import ScoreRepository


client = TestClient(app)


class MockScoreRepository:
    def get_all_scores(self):
        return [test_scores]


test_scores = {
    "id": 1,
    "played_on": "1970-01-01T00:00:12+00:00",
    "score": 1,
    "player_id": {
        "id": "1",
        "first_name": "Senior",
        "last_name": "Pikachu",
        "username": "username",
        "email": "a@gmail.com",
        "profile_picture": "https://example.com/"
    },
    "game_id": {
        "id": "1",
        "name": "quiz",
        "description": "A fun game",
        "picture_url": "https://example.com/"
    },
    "time_completed": "01:23:23",
}


def test_get_all_scores():

    app.dependency_overrides[ScoreRepository] = MockScoreRepository

    response = client.get("/scores")

    assert response.status_code == 200
    assert response.json() == [test_scores]

    app.dependency_overrides = {}
