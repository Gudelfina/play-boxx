from fastapi.testclient import TestClient
from main import app
from queries.games import GameRepository

client = TestClient(app)


class MockGameRepository:
    def get_all_games(self):
        return [mock_games]


mock_games = {
    "id": "1",
    "name": "Game",
    "description": "New game",
    "picture_url": "https://example.com/game.jpg",
}


def test_get_all_games():
    # Arrange
    app.dependency_overrides[GameRepository] = MockGameRepository

    # Act
    response = client.get("/games")

    # Assert
    assert response.status_code == 200
    assert response.json() == [mock_games]

    # Clean up
    app.dependency_overrides = {}
