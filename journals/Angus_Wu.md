## March 28, 2023

### Docker

- worked together to draft up our docker-compose.yaml file
- updated sample_service to playboxx_service
- added environment for the services, will add signing_key in the future
- Set up the database image, volumes, environment, and ports

### Migrations

- Set up users, games, and scores tables with everyone
- Should maybe include tables from stretch goals so we don't need to alter tables later on?

## March 29, 2023

### Gitlab Merge Requests

- I submitted a merge request for our docker-compose.yaml file and migrations that we worked on yesterday
- I learned how to attach issues to the merge requests and Rodrigo reviewed the request and approved it

### Backend authentication

- As a group, we created an authenticator file and began working on the routers and queries directory
- We were able to successfully create users through the FastAPI docs but seemed to continue runing into errors that we believe may have stemmed from the lack of a get function
- We're hoping to be able to continue implementing the authentication tomorrow and work on endpoints if we have the time

## March 30, 2023

### Backend authentication

- As a group, we finished setting up the sign up, sign in, update, and delete functionalities of authentication
- We ran into some problems with the update functions but we managed to make it work
- Might have to revisit in the future to see if we can adjust some of the models to fit our goals
- Another issue we will revisit in the future is regarding JWT tokens; when users change the password, we should provide them with new tokens and revoke the old ones for better security
- This may require a router and queries for login sessions, so we could work on those for our stretch goals
- We finished up by merging with the main branch and will continue on with endpoints in the upcoming week
