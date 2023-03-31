## March 29, 2023

### Today, I worked on:

#### Handling merge requests on GitLab:

- Angus submitted a merge request which Rodrigo approved after Rodrigo tested the request
- Angus properly attached the corresponding issues to the merge request
- Angus successfully merged the request into main
- The group was able to pull from main and so we can all use a Docker compose file and migrations for users, games and scores

#### Backend user auth with Rodrigo, Angus and Lupe:

- We created an JWTdown authenticator file along with the users.py files that belong in the routers directory and queries directory, respectively
- As a team, we entered LOTS of challenges implementing the user backend auth such as:
  - Using print statements in each file to see what data each variable is referring to
  - Getting a `500 Internal Server Error` when we attempted to create a user through the FastAPI docs GUI
  - Knowing how to deal with hashing a password and storing that hased password in the database

#### Wins for the day:

- I learned how to properly submit a merge request and attach a GitLab issue
- My group and I were able to make progress on the user backend auth which many groups in the module ahead of us struggled with
- We are able to use the FastAPI docs page to create a new user in the database

### Tomorrow, I will:

- Continue with backend user auth
  - Need to get correct response after submitting create user request to path `/users`
- Possible work on endpoints for users, scores and games
