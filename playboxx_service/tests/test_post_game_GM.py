from fastapi.testclient import TestClient
from main import app
from queries.games import GameRepository, GameIn, GameOut
from authenticator import authenticator

client = TestClient(app)


class MockGameRepository:
    def create_game(self, game: GameIn) -> GameOut:
        return GameOut(id="1", **game.dict())


class MockAuthenticator:
    def get_current_account_data(self):
        return {"username": "test_user"}


def test_create_game():
    # Arrange
    app.dependency_overrides[GameRepository] = lambda: MockGameRepository()
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = lambda: MockAuthenticator().get_current_account_data()

    mock_game = {
        "name": "Game",
        "description": "A new game",
        "picture_url": "https://example.com/new-game.jpg",
    }

    auth_token = "valid_auth_token"

    headers = {"Authorization": f"Bearer {auth_token}"}

    # Act
    response = client.post("/games", json=mock_game, headers=headers)

    # Assert
    assert response.status_code == 200
    assert response.json() == {"id": "1", **mock_game}

    app.dependency_overrides = {}
