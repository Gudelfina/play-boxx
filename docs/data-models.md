# Data Models

## Users

| name            | type               | unique | not null |
| --------------- | ------------------ | ------ | -------- |
| id              | SERIAL PRIMARY KEY | yes    | yes      |
| first_name      | VARCHAR(100)       | no     | yes      |
| last_name       | VARCHAR(100)       | no     | yes      |
| username        | VARCHAR(100)       | yes    | yes      |
| hashed_password | VARCHAR(100)       | no     | yes      |
| email           | VARCHAR(255)       | yes    | yes      |
| profile_picture | TEXT               | no     | yes      |

## Scores

| name           | type                                       | unique | not null |
| -------------- | ------------------------------------------ | ------ | -------- |
| id             | SERIAL PRIMARY KEY                         | yes    | yes      |
| score          | VARCHAR(100)                               | no     | yes      |
| played_on      | TIMESTAMP DEFAULT CURRENT_TIMESTAMP        | no     | yes      |
| player_id      | INT REFERENCES users(id) ON DELETE CASCADE | no     | yes      |
| game_id        | INT REFERENCES games(id)                   | no     | yes      |
| time_completed | VARCHAR(100)                               | no     | no       |

## Games

| name        | type               | unique | not null |
| ----------- | ------------------ | ------ | -------- |
| id          | SERIAL PRIMARY KEY | yes    | yes      |
| name        | VARCHAR(100)       | no     | yes      |
| description | TEXT               | no     | yes      |
| picture_url | TEXT               | no     | yes      |
