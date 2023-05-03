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

## April 03, 2023

### Creating backend endpoints

- We worked together as a group to create the endpoints for
  - Getting all the games
  - Deleting a game
  - Creating a game
  - Updating a game
- We're thinking about how we might change the inputs for update so that a empty input would just return what was already there

## April 04, 2023

### Creating backend endpoints

- We worked together as a group to create the endpoints for
  - Getting a singular game
  - Creating a score
  - Deleting a score
  - Getting all the scores
- We ran into some difficulties getting the responses we wanted but we managed to figure it out be instantiating some dictionaries

## April 05, 2023

### Protecting endpoints

- We worked together as a group to protect our endpoints so that certain endpoints are only accessible by logged-in users

### Frontend authentication

- We began working with redux and trying to do our frontend auth
  - We ran into some issues with trying to store the user token and working with the state
  - We'll be working to try to figure out redux and trying to finish up our frontend authentication by the end of this week

## April 06, 2023

### Frontend authentication

- We finished up the frontend authentication with redux by implementing a login, sign in, and sign up
  - There were some problems when it came to login and sign in regarding persisting the tokens so we opted to make use of redux-persist
  - There was also a problem with navigate re-rendering the page and creating an issue where we were rendering a BrowserRouter component while still rendering the LoginForm
    - However, we were able to make adjustments by adding a useEffect and got it to work
- We'll be working on implementing the rest of our frontend components and hopefully able to implement what we want with three.js and how the features would look like

## April 07, 2023

### Frontend

- We began implementing the frontend auth components, including:
  - The login form
  - The sign in form
- We spent some time discussing how we wanted the styling to possibly look like
- Designated some tasks to work on over the spring break

## April 17, 2023

## Deployment

- We followed the first step of deployment and was able to complete it
  - Made the password
- We discussed what each individual did over the spring break and spent a lot of time merging and dealing with the conflicts
- We discussed the plan for the next two weeks

## April 18, 2023

### Quiz Game

- We began implementing our first game, the quiz game
  - We had to debug how the answers and questions were showing up and were able to do it in the end
  - We were also able to implement a timer and made use of prop drilling in order to have the timer start right when the `start` button is clicked
- We did run into a rendering error when a child component is interferring with the parent component that will have to be fixed
  - Did end up fixing it using useEffect

## April 19,2023

### Backend authentication

- Realized we made an error with protecting endpoints on the backend
  - Was able to fix it after referring to the docs
  - Messed up the dependencies originally

### Quiz Game

- We finished the basic functionality of the game
  - There's a timer that will track how long the game took
  - The game stores the scores of the user
  - State resets when we click on a button
- Certain bugs we have to address:
  - Game needs to reset state and restart when user clicks on corresponding button (including score and time_completed)
  - The card component wasn't appearing due to setting a conditional render with token

## April 20, 2023

### Merges

- We finished merging a lot of the files and handled the merge conflicts

### Quiz Game

- We made a lot of progress today with the quiz game
  - We were able to implement the restart button so the user is able to restart the game at any point, and also restart at the end
  - The state of score and time_completed is reset when the button is clicked on and the score is sent correctly at the end of the game
- Ran into a couple of issues with how the timer didn't restart but we were able to work as a group to debug the problem

### Leaderboard

- We finished populating the leaderboard with the top ten scores for a game
  - To do this, we had to make some adjustments to the SQL on the backend for `get_all_scores`, including updating the pydantic model
  - There was a issue with the data having less than ten entries and the leaderboard not rendering due to an undefined player_id for an empty entry, but we were able to address that
  - Overall the leaderboard feature seems to be completed

### Profile Page

- A lot of progress was made on the profile page for the user
  - Updated the route by protecting it so only logged in users are able to access the profle page
  - Implemented the user's scores on the page, also displaying their profile picture, email, first and last name, and username
- We plan to implement a feature allowing the user to edit their information (thinking of either a separate form or maybe inline)

## April 24, 2023

### Merges

- Following the work we did this past weekend, we compared our changes and merged our files to main

### Edit user page

- We began working on our edit user page but encountered quite a few hurdles
  - At first, there were some issues with accessing the user's usernames and emails so we decided to add an endpoint that allowed us to retrieve that data
  - We ran into some problems trying to update the user's information as the username and email were unique in the database, but was able to come to a solution after troubleshooting for a while
  - Another major hurdle we ran into was that we were able to update the user's profile but had to log in again for the profile to update
    - We created a new reducer that allowed us to update the user with the updated information
  - We also had trouble saving the scores once the user profile was updated, but Sirasit was able to debug and figure it out

### Plans

- Once we get a basic css look done on the edit profile page, we'll move on to the creator cards, which will probably be the last component we're working on for the MVP portion
- After that we'll start finishing the rest of the steps to deploy our application
- Once deployment is complete, we'll probably head back and address any errors we might've missed, finish up the unit tests, and work on some stretch goals

## April 25, 2023

### Delete User Modal

- We finished testing out the changes but realized there was certain functionalities that had to be added to the `DeleteUserModal` component
  - Some things we had to finish implementing: revoking the token when the user deletes the account, the user is automatically signed out when they delete their account, if the user has scores associated with their account they aren't able to delete their account
  - I was able to make use of the logout mutation we made earlier and automatically sign out the user and revoke the token when the account is deleted
  - I was able to make adjustments to our migrations table so the user's scores are also deleted when they delete their user
- After we were satisfied with our changes, we merged to main

### Deployment

- We started the rest of the steps on deployment. There were a lot of things we had to do, and we got confused quite a bit. After a lot of research and consulting hmu, we were able to deploy our site. However, there are still a lot of problems that we would have to troubleshoot, including a CORS error

## April 26, 2023

### Deployment

- We finished up deployment today, fixing up our CORS issue by adjusting the `origins_allow` in `main.py`
- We noticed that our navlinks weren't including the /play-boxx so we took some time adjusting that

### Loginform

- I updated the loginform again to fit the aesthetic of our application and the signup form

### Navbar

- We fixed the flickering logo by removing the last frame of the gif
- Lupe was able to add icons to our navbar and line up the words in it

### Quiz Game

- Sirasit updated the look of the game by changing the look of the answer choices and the structure of the questions

### Plans

- We plan to hopefully knockout our readme tomorrow
- We need to add more styling to our edit profile page and creator page

## April 27, 2023

### README.md

- We worked together to format the readme structure and made sure it contains all the necessary components

### Presentation

- We presented out project

### Stretch Goals

- We began working on some stretch goals in feature branches and will continue working on them in the upcoming days
