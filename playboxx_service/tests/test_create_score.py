from fastapi.testclient import TestClient
from main import app
from queries.scores import ScoreRepository, ScoreOut
from authenticator import authenticator

client = TestClient(app)

class MockScoreRepository:
    def create_score(self, score):
        result = {
            "id": 1,
            "score": 5,
            "player_id": 1,
            "game_id": 1,
            "time_completed": "10000"
        }
        result.update(score)
        return result

def accounts_override():
    return {
        "id": 1,
        "email": "llee@example.com",
        "username": "LindyLee"
    }

def test_create_score():
    # Arrange
    app.dependency_overrides[ScoreRepository] = MockScoreRepository
    app.dependency_overrides[authenticator.get_current_account_data] = accounts_override

    # Act
    json = {
        "score": 5,
        "player_id": 1,
        "game_id": 1,
        "time_completed": "10000"
    }

    expected = ScoreOut(id=1, score=5, player_id=1, game_id=1, time_completed="10000")

    response = client.post("/scores", json=json)

    app.dependency_overrides = {}

    # Assert
    assert response.status_code == 200
    assert response.json() == expected
