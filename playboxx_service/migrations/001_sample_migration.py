steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            username VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL,
            email VARCHAR(255) UNIQUE CHECK (email ~* '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'),
            profile_picture TEXT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE games(
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(100) NOT NULL,
            description TEXT NOT NULL,
            picture_url TEXT NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE games;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE scores (
            id SERIAL PRIMARY KEY NOT NULL,
            score INTEGER NOT NULL,
            played_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            player_id INTEGER NOT NULL REFERENCES users(id),
            game_id INTEGER NOT NULL REFERENCES games(id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE scores;
        """,
    ],
]
