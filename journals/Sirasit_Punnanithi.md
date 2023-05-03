## April 28, 2023

### Today, I worked on:

> We can access our **CapRover GUI** page at `https://captain.dec-pt-2.mod3projects.com`, **production FastAPI docs** page at `https://playboxx-service.dec-pt-2.mod3projects.com/docs` and our **Gitlab Pages** at `https://playboxx.gitlab.io/play-boxx`

#### Finished individualized creator card with myself:

- I added an 'About Me' and 'Hobbies/Interests' section to my creator card so visitors of the application can get to know me
- Visitors can click on links to my LinkedIn, Gitlab and Github accounts

#### Added fixed Footer to the application with myself:

- I added a fixed Footer that is always displayed at the bottom of the screen even if the user scrolls
- 'GitLab Docs' link will take the user to our PlayBoxx repo on GitLab
- 'About' link will take the user to the Creators page

#### Wins for the day:

- We are making finishing tweaks to styling to prepare for the demo next Thursday
- Our site looks great and is functional!

### Next week, I will:

- Watch for errors and odd behavior from our deployed application
- Work on stretch goals and improve on styling of overall application to get ready for the demo next Thursday
- Merge our changes next Tuesday, per instructions from Paul

## April 27, 2023

### Today, I worked on:

> We can access our **CapRover GUI** page at `https://captain.dec-pt-2.mod3projects.com`, **production FastAPI docs** page at `https://playboxx-service.dec-pt-2.mod3projects.com/docs` and our **Gitlab Pages** at `https://playboxx.gitlab.io/play-boxx`

#### Presented our project to an instructor(James) with Angus, Lupe, and Rodrigo:

- First, we started off showing James our wireframes off of Excalidraw
- Then, we demo'ed our application from the deployment application URL
  - We were able to show off everything required for our MVP and have it work
  - James played the quiz game and scored a 6/10
  - Overall, James said the application looks great and the aesthetic is nice
- Finally, we individually presented our backend, frontend and unit test contributions to the application:
  - For backend, I presented `get_one_game` backend endpoint
  - For frontent, I presented populating the leaderboard with scores from the backend
  - For unit test, I presented creating a unit test for `create_score` backend
- James said our site could be deployed for up to 3 months and maybe even longer
- Also, he said we can use pgAdmin to connect with our deployment database to wipe data for the demo next week

#### Finished `README.md` for this application with Angus, Rodrigo, and Lupe:

- We finished the `README.md` for the overall PlayBoxx application
- We included `ghi.md`, `api.md`, `data_model.md`, and `wireframes.md` as well to explain what we were envisioning for this application

#### Wins for the day:

- We are officially finished with the graded portion of our MVP
- I feel relieved that we will get the credit that we deserve for this application
- Now, we can focus on any stretch goals that we want to implement before our demo for our cohort and the other cohorts next Thursday

### Tomorrow, I will:

- Watch for errors and odd behavior from our deployed application
- Improve on styling of overall application
- Finish individual creator card

## April 26, 2023

### Today, I worked on:

#### Finished debugging our deployment which includes frontend (GitLab Pages) and backend (CapRover) with Angus, Lupe, and Rodrigo:

> We can access our **CapRover GUI** page at `https://captain.dec-pt-2.mod3projects.com`, **production FastAPI docs** page at `https://playboxx-service.dec-pt-2.mod3projects.com/docs` and our **Gitlab Pages** at `https://playboxx.gitlab.io/play-boxx`

- Our group was able to fully deploy our site with a working backend, database and frontend and no significant errors in the console
  - Rosheen said that the `404` and `403` errors are common with other groups' projects as well; grade will not be affected
- We fixed the NavLink taking us to the wrong URL by moving BrowserRouter from `index.js` into `App.js`
  - Then, we added `onClick={() => e.preventDefault(); navigate("<<path URL>>");}` to each NavLink in `NavBar.js`
  - To make sure the active state works for all links in NavBar, we added `to={"<<development path URL>>" || "<<deployment path URL>>"}`, eg. `to={"/games" || "/play-boxx/games"}`, to make sure the active state of each NavLink matches with development and deployment URLs
    - We added `a.active { color: #7366ad; }` in `Component.css` to style the active NavLink
- We fixed the CORS issue by changing the CORS_HOST in App Configs in playboxx-service app in CapRover from `https://playboxx.gitlab.io/play-boxx` to `https://playboxx.gitlab.io`
  - Now, we are able to connect our deployed frontend to our backend on CapRover without getting a CORS error
- Still to test if our site works and look for odd behavior in deployed application

#### Improved styling for all Quiz game pages with myself:

- I changed the font to "Braah One" from Google Fonts to make the font fit the aesthetic better
- I changed the overall layout of the Question page to make it look like this:
  - Depending if answer is correct or incorrect; text in green or red will get displayed accordingly
  - Question number indicator at the top of the page will increment as the user answers the questions
  - Question has different colored text for better visibility
- I changed the QuizResult page to look like this:
  - Restart button was moved from the Start page into the Quiz Result page
  - Leaderboard link was replaced with a button to match the Restart button
  - Score and time completed will get displayed for the user at the end of every quiz game

#### Wins for the day:

- We deployed our app and debugged most, if not all, of the error from our frontend!!!
- We straightened up most of our styling for our applicatin, such as:
  - NavBar
  - Quiz game pages
  - Login page
  - Signup page
  - Font

### Tomorrow, I will:

- Watch for errors and odd behavior from our deployed application
- Improve on styling of overall application
- Work on `README.md`
- Finish individual creator card

## April 25, 2023

### Today, I worked on:

#### Finished Parts 2-4 of deployment which includes frontend (GitLab Pages) and backend (CapRover) with Angus, Lupe, and Rodrigo:

> We can access our **production FastAPI docs** page at `https://playboxx-service.dec-pt-2.mod3projects.com/docs` and our **Gitlab Pages** at `https://playboxx.gitlab.io/play-boxx`

- Our group was able to mostly deploy our site with a working backend, database and frontend
- However, we are having issues with:
  - Having our `NavLink`s work since everytime we click on the `NavLink` the it takes us to `https://playboxx.gitlab.io/games`(wrong) instead of `https://playboxx.gitlab.io/play-boxx/games`(right)
  - When we are communicating with the backend such as signing up or logging in, we are having issues with CORS

#### Wins for the day:

- Our group was able to finish a majority of deployment (backend and frontend) in one day
- Now, we just have to debug some URL issues and CORS issues
- Overall, we made great progress in deployment in just one day; the `help-me-understand` Slack channel helped us out a lot
- Once deployment is successful, we can focus on standardizing styling across our application

### Tomorrow, I will:

- Finish deployment with my group
- Finish styling on overall application (Profile Page, Landing Page and Quiz Game)

## April 24, 2023

### Today, I worked on:

#### Added ability to update user information on Profile Page with Lupe, Angus, and Rodrigo:

- Users can now choose to keep their current user information or change one or all fields
- However, user **MUST** enter in a password, whether it is the same or different from before
- The changes will get reflected on Profile page and Leaderboards
- We fixed a bug where the leaderboard information would not display and Quiz game score would not get posted after updating a user
  - Fixed the bug by creating a reducer in `userSlice.js` to update user state and passing in form data **PLUS** user id

#### Wins for the day:

- We were able to get the update Profile page working towards the end of the day
  - Now users are able to:
    - Update any part of their profile
    - User must enter a password even if they don't want to completely change it
    - Updated information will get reflected on user's profile page and leaderboards
- We pretty much only need to focus on styling our application and deployment

### Tomorrow, I will:

- Finish update profile page functionality for frontend and test to make sure all features work after user updates profile
- Finish styling on overall application (Profile Page, Landing Page and Quiz Game)
- Finish deployment with my group

## April 22, 2023

### Today, I worked on:

#### Added show/hide password & password confirmation functionality to Signup Page with myself:

- User can toggle show/hide password & password confirmation
- Makes it easier for user to see what they typed for their password & password confirmation

#### Created unit test for `create_score` backend endpoint with myself:

- In `fastapi-1` Docker container, we can run `python -m pytest` to run test to check `create_score` endpoint
- Test checks for correct input object returning a status code of `200` and response object is an instance of `ScoreOut`
- Also test will check if the user needs to be authenticated

#### Fixed bug on Profile Page where the page was infinitely fetching `GET` requests with myself:

- Before the fix, the Profile Page infinitely sent `GET` fetch requests to populate the personal leaderboard
- The infinite fetching occured due to having `scores` as the dependency array for the `useEffect` for the fetch request
- We needed to change the depedency array to sometime that only changed once for page render
  - Added `isDeleted` state that is set to either `true` or `false` based on `onClick` per score deleted
  - `isDeleted` allows the page to re-render only once if user deletes a score

#### Added styling to Profile Page with myself:

- Added beige background color to entire Profile page
- Added styling to personal leaderboard on Profile page:
  - Added Ranking and Date Played to table
  - Changed background color
  - Centered in middle of page

#### Wins for the day:

- I was able to identify and stop an infinite re-rendering from the Profile Page
- The Profile page has better styling
- Added show/hide password functionality on sign up page for better user experience

### Next week, I will:

- Implement update profile page functionality for frontend
- Finish styling changes on overall application
- Finish deployment with my group

## April 20, 2023

### Today, I worked on:

#### Finished populating the leaderboard with scores from the backend with Rodrigo, Angus, and Lupe:

- Our group was able to populate the leaderboard by fetching scores from the backend
- Leaderboard is able to display the ranking, username, score and time completed
- Leaderboard is ranked by highest score and lowest time completed
- We used SQL statements in our backend to send ordered scores to our frontend

#### Continued working on frontend implementation of Quiz game with Rodrigo, Angus, and Lupe:

- Created a button to replay the game at the result page
- Fixed some bugs on the way after implementing the restart button where the time did not start
  - Fixed by setting isEndOfGame to `false` for every `onClick`
- Still need to style quiz game to make it look better

#### Started styling profile page with Angus, Lupe, and Rodrigo:

- Profile page will display profile picture, username, first name, last name, email and table to display scores and games
  - Implemented `delete` button with modal toggle on each of the scores in the table
- Protected frontend Profile page by wrapping it with a `<ProtectedRoute>` component in `App.js`
  - User will get redirected to login page if not logged in
- `Profile` link on NavBar will take user to Profile page
- Still need to style profile page to make it look better and add `Edit Profile` option

#### Modified what is displayed on NavBar if user is logged in vs. not logged in with Lupe, Rodrigo, and Angus:

- If user is logged in:
  - Dropdown menu will display `Profile` link and `Sign Out` link
  - Profile picture will get displayed as the Dropdown menu avatar
- If user is **NOT** logged in:
  - Dropdown menus will display `Log in` link and `Sign up` link
  - Generic profile picture will get displayed on Dropdown menu avatar

#### Wins for the day:

- Our group accomplished SOOO much today!
- Our group was able to debug strange behavior for our quiz game and profile page
- We have a majority the logic for our MVP finished; we just need to style our exisiting pages

### Over the weekend, I will:

- Implement unit test for `create_score` endpoint
- Work on styling of Profile page
- Add "see password" functionality for Sign up form page

### Next week, I will:

- Implement update profile page functionality for frontend
- Finish styling changes on overall application
- Finish deployment with my group

## April 19, 2023

### Today, I worked on:

#### Continued working on frontend implementation of Quiz game with Rodrigo, Angus, and Lupe:

- Our group was able to set up Redux Toolkit (RTK) to store score and time of current play through
- We were able to send the score and time for the user to store in our backend
- We were able to style appearance of the quiz game
- We have a way to reset the score and time in Redux store after the game
- If time permits, we will try to refactor the code so the questions, answers, categories are stored in Redux as well

#### Wins for the day:

- We are now able to submit a score to our backend upon each completed quiz game!
- We have a majority of the logic completed for the quiz game, just need to style the quiz game

### Tomorrow, I will:

- Start working on populating the leaderboard with the scores from our backend
- Continue working on quiz game

## April 18, 2023

### Today, I worked on:

#### Started working on frontend implementation of Quiz game with Rodrigo, Angus, and Lupe:

- Implemented ability to fetch 10 questions for one quiz game and stored within a state
- Implemented ability to keep score for each correct answer given for one quiz game
- Able to display the question, possible answers, timer and score on the page for the user while playing the game
- Have a working timer that starts and stops when the user is answering the questions

#### Wins for the day:

- Our group was able to finish a majority of the quiz game
- We were able to make a working score counter and timer that will be used in the game
- We were able to correctly fetch, store and display trivia questions from a third-party API

### Tomorrow, I will:

- Continue working on the quiz game
  - We still need to style the quiz game and correctly send the score, time and user to the backend for data storage
  - We need to style the quiz game
- Finish populating the leaderboard with data from the database

## April 17, 2023

### Today, I worked on:

#### Finished frontend sign-up page styling with myself:

- Added login page redirection for user
- Semi-finalized look and color of sign-up page
- Will consider adding show/hide password in the future
- Will adjust colors of the sign-up page at a later time based on the group

#### Started unit test creation for games, scores and users with Angus and Lupe:

- We finished unit tests for get_all_games and get_all_scores
- We had trouble trying to implement a sample output for create_user since we didn't know how to mimic an access_token
- We will continue to work on a few more unit tests for other backend endpoints

#### Started on Deployment (Finished Part 1) with Angus and Lupe:

- We were able to complete Part 1/4 of deployment
- We will attempt to complete the other steps (2, 3, and 4) later

#### Wins for the day:

- Our group was able to semi-finalize the sign-up, log-in, and leaderboard pages
  - We will finalize the aesthetics of the pages at a later date
- We started working on unit tests which are needed for each person to pass this module

### Tomorrow, I will:

- Start on frontend Quiz game
- Finish unit test creation
- Finish Deployment steps 2, 3, and 4

## April 15-16, 2023

### Today, I worked on:

#### Started frontend sign-up form styling using Tailwind CSS with Flowbite with myself:

- I was able to start on a styled sign-up form using Tailwind CSS with Flowbite
- I was able to keep the sign-up functionality even after messing with the styling of the page
- Still need to add login page redirection

#### Finished implementation of password validation functionality for sign-up form with myself:

- Implemented password validation on sign-up form to make sure user enters in a password with 8 or longer characters and matches password confirmation
  - A error message appears below the password input to re-prompt user to change their password before the form can be submitted

#### Wins for the day:

- I was able to use Tailwind CSS to create a nice-looking sign-up form that can easily be adjusted to fit the overall theme of our application
- I was able to implement a way to validate passwords
- After everything, the sign up functionality still worked!

### Tomorrow (After Spring Break), I will:

- Finish up Sign up page to merge into main
- Start on Quiz game

## April 7, 2023

### Today, I worked on:

#### Started frontend navigation bar styling using Tailwind CSS and Flowbite CSS with Rodrigo, Angus, and Lupe:

- Our group started on navigation bar styling using Tailwind CSS with the Flowbite CSS library
- We talked through design decisions for the look of our navbar
- We experimented with the capabilities of Tailwind with Flowbite

#### Wins for the day:

- Our group was able to decide on using Tailwind CSS with the Flowbite library
- We were able to decide on a general look of our navbar

### Tomorrow (After Spring Break), I will:

- Have completed the Sign-In page
- Work on the Quiz game

## April 6, 2023

### Today, I worked on:

#### Finished frontend login functionality with Rodrigo, Angus, and Lupe:

- Our group was able to successfully allow the user to enter in username and password to login to their account
- User is given an `access_token` that gets stored in the `user` store within Redux along with user information that can be used in other parts of the application
  - Since the store does not persist through page refreshes, we added `redux-persist` to persist the store
  - User will stay logged in until they click the logout button
- Upon successful login, user is redirected to the `GamePage`

#### Started and finished frontend signup and logout functionality with Rodrigo, Angus, and Lupe:

- Our group was able to create a reducer in the `authApi` slice to send a `DELETE` request to the backend to logout the user once they click on the logout button
  - The token is set to null and user is set to `{}` in the `user` store
- Our group was able to create a reducer in the `authApi` slice to send a `POST` request to the backend to create a user once the form is submitted
  - User was created in the database as well

#### Wins for the day:

- Our group was able to finish the frontend auth for our application
- Our group can start working on frontend pages such as main landing page, signup page, login page, and quiz game page

### Tomorrow, I will:

- Continue with creating and styling frontend pages

## April 5, 2023

### Today, I worked on:

#### Protected backend endpoints with Angus, Lupe and Rodrigo:

- On the backend, we protected certain endpoints for `users`, `games`, and `scores` by requiring user to have a token to interact with that endpoint

#### Started frontend auth regarding logging-in a user with Angus, Lupe and Rodrigo:

- As a group, we started working on frontend auth by creating `authApi` and `userSlice` slices to store the user's information and access_token once they enter in correct username and password
- We had issues with storing the user information and access_token in the user store within Redux

#### Wins for the day:

- We were able to finish backend auth
- We were able to start on frontend auth

### Tomorrow, I will:

- Continue working on frontend auth for logging-in, loggin-out and signing-up a user

## April 4, 2023

### Today, I worked on:

#### Finishing endpoints for creating, getting and deleting scores with Angus, Lupe and Rodrigo:

- Our group made progress on creating endpoints for the `POST`, `GET` (list view) and `DELETE` for path `scores/`
- We overcame difficulties while implementing the `GET` method when we were trying to create a complex model using Foreign Keys associated with games and users
  - We overcame the blocker by hardcoding the dictionary that we want returned from the `player_id` and `game_id`
  - By the end, we were able to receive the list of scores from a single score `GET` request

#### Wins for the day:

- My groupmates and I were able to mostly finish the endpoints for `scores/`
- My groupmates and I were able to talk out solutions for a blocker regarding the `GET` (list view) for `scores/`
- After we complete the `DELETE` endpoint for scores, we will be done with all of the backend endpoints for our MVP!

### Tomorrow, I will:

- Finish endpoints for `scores/`
- Start on frontend auth using Redux Toolkit

## April 3, 2023

### Today, I worked on:

#### Finishing endpoints for creating, updating, and getting games with Angus, Lupe and Rodrigo:

- Our group started working on endpoints for `games/`
- We were able to finish endpoints for `POST`, `PUT` and `GET` (list view) for games
- We were able to resolve a merge conflict that occurred after we forgot to pull from main branch before creating a new feature branch

#### Wins for the day:

- My groupmates and I were able to mostly finish the endpoints for `games`
- My group was able to encounter a merge conflict that we were able to work through together
  - Solution was to switch to desired branch that is going to get merged
  - `git pull`
  - Resolve any conflicts
  - `git add .`, `git commit` and `git push`
  - Use `git rebase --continue` command

### Tomorrow, I will:

- Work on `GET` (detail view) and `DELETE` endpoints for `games/`
- Start on endpoints for `scores/`

## March 30, 2023

### Today, I worked on:

#### Finishing backend endpoints for creating, updating and deleting a user with Rodrigo, Angus and Lupe:

- Our group was able to work through the backend user auth for our application
  - We are able to successfully create, update and delete a user using the FastAPI docs and have the changes reflected in our database
- I believe our backend endpoints are ready to match up with a frontend user auth component

#### Finishing backend user log-in and log-out auth with Rodrigo, Angus and Lupe:

- Our group was able to create token endpoint that allow us to log in with correct username and password
  - An unique access_token is assigned to a user upon successful log-in
- Also, a token endpoint was created to log a user out as well
- Finally, a third token endpoint was created so we can get user account data if we search by access_token

#### Wins for the day:

- My group was able to finish the endpoints for user authentication which our group was most worried about
- We were able to turn a password into a hashed password before it is stored in our database
- My group was able to successfully merge two merge requests

### Tomorrow (Next Week), I will:

- Work on endpoints for scores and games
- Work on frontend React components

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
