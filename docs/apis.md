# API Outline

## PlayBoxx API

- **Home Page** `http://localhost:3000`
- **Login** `http://localhost:3000/login`
- **Signup** `http://localhost:3000/signup`
- **Leaderboard** `http://localhost:3000/leaderboard`
- **Creator Page** `http://localhost:3000/creators`
- **Game Page** `http://localhost:3000/games`
- **Quiz Game** `http://localhost:3000/games/quiz`
- **User Profile** `http://localhost:3000/profile`
- **Edit User** `http://localhost:3000/profile/edit`

## FastAPI Endpoints:

## Scores

### Get All Scores

- **Methods**: 'GET'
- **Path**: '/scores'

- Output (Status Code 200):

```json
[
  {
    "id": 0,
    "score": 0,
    "played_on": "2023-04-27T00:31:13.297Z",
    "time_completed": "string",
    "player_id": {
      "id": "string",
      "first_name": "string",
      "last_name": "string",
      "username": "string",
      "email": "string",
      "profile_picture": "string"
    },
    "game_id": {
      "id": "string",
      "name": "string",
      "description": "string",
      "picture_url": "string"
    }
  }
]
```

### Create Score

- **Methods**: 'POST'
- **Path**: '/scores'

- Input:

```json
{
  "score": 0,
  "player_id": 0,
  "game_id": 0,
  "time_completed": "string"
}
```

- Output (Status Code 200):

```json
{
  "id": 0,
  "score": 0,
  "player_id": 0,
  "game_id": 0,
  "time_completed": "string"
}
```

### Delete Score

- **Methods**: 'DELETE'
- **Path**: '/scores/{score_id}'

- Output (Status code 200):

```js
true;
```

## Games

### Get All Games

- **Methods**: 'GET'
- **Path**: '/games'

- Output (Status Code 200):

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "picture_url": "string"
  }
]
```

### Create Game

- **Methods**: 'POST'
- **Path**: '/games'

- Input:

```json
{
  "name": "string",
  "description": "string",
  "picture_url": "string"
}
```

- Output (Status Code 200):

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "picture_url": "string"
  }
]
```

### Get One Game

- **Methods**: 'GET'
- **Path**:'/games/{games_id}'

- Output (Status Code 200):

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "picture_url": "string"
  }
]
```

### Update Game

- **Methods**: 'PATCH'
- **Path**: '/games/{games_id}'

- Input:

```json
{
  "name": "string",
  "description": "string",
  "picture_url": "string"
}
```

- Output (Status Code 200):

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "picture_url": "string"
  }
]
```

### Delete Game

- **Methods**: 'DELETE'
- **Path**: '/games/{games_id}'

- Output (Status Code 200):

```js
true;
```

## Users

### Get All Usernames and Emails

- **Methods**: 'GET'
- **Path**: '/api/users'

- Output (Status Code 200):

```json
[
  {
    "username": "string",
    "email": "string@example.com",
    "id": 1
  },
  {
    "username": "string2",
    "email": "string2@example.com",
    "id": 2
  }
]
```

### Create User

- **Methods**: 'POST'
- **Path**: '/api/users'

- Input:

```json
{
  "first_name": "string",
  "last_name": "string",
  "username": "string",
  "password": "string",
  "email": "string",
  "profile_picture": "string"
}
```

- Output (Status Code 200):

```json
{
  "access_token": "string",
  "token_type": "Bearer",
  "user": {
    "id": "string",
    "first_name": "string",
    "last_name": "string",
    "username": "string",
    "email": "string",
    "profile_picture": "string"
  }
}
```

### Update User

- **Methods**: 'PUT'
- **Path**: '/api/users/{id}'

- Input:

```json
{
  "first_name": "string",
  "last_name": "string",
  "username": "string",
  "password": "string",
  "email": "string",
  "profile_picture": "string"
}
```

- Output (Status Code 200):

```json
{
  "id": "string",
  "first_name": "string",
  "last_name": "string",
  "username": "string",
  "email": "string",
  "profile_picture": "string"
}
```

### Delete User

- **Methods**: 'DELETE'
- **Path**: '/api/users/{id}'

- Output (Status Code 200):

```js
true;
```
