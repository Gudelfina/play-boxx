## March 28th

Today we worked together as a group to create our docker-compose.yaml file. In the file, we added environment for the services and will add the signing key later in the week. We also set up the database images, volumes, and ports. We also changed the sample_service to be named playboxx_service as well. Once that was done and we had our database running, we set up the migrations. We created tables for our users, scores, and games.

## March 29th

Today, we worked on our backend user authentication. It was difficult to implement as we continued to encounter many challenges. Like trying to figure out how to deal with hashing a password and storing that hashed password in the database. We had to use print statements around the files to understand where the problem was stemming from. There were also 500 internal server errors when we tried to create a user through the FastAPI docs GUI. We were able to figure out some issues, but for tomorrow, we will continue to work on backend authentication and try to get the correct response after creating a user. If we finish that, we may also be start on our other endpoints (users, scores, and games)

## March 30th

Today we completed backend user authentication and created endpoints to delete and update a user’s information. We also finished setting up the sign in, sign up, delete, update functions for authentication. There were some issues, but we were able to figure them out by the end of the day. We also discussed the JWT tokens. We would like to have the user get a new token if they user changes their password. We should provide them with new tokens and not allow the old ones to be used for better security. For tomorrow, we will continue to work on our endpoints and concerns.

## April 3rd

Today, as a group, we worked on creating POST, GET, and UPDATE → PATCH endpoints for our games table. Rodrigo submitted a merge request for the POST method, I submitted a MR for GET method, and Sirasit submitted a MR for the UPDATE/PATCH method.

We did run into some troubles with merging the requests once they were approved. We aren’t entirely sure why this is occurring, but it may be because we’re creating the branches too early so there’s a conflict when we try to pull from main, but this is something we will investigate tomorrow. We also had a conflict with our UPDATE method because it does allows us to update the specific game, but it doesn’t allow partial updates, which is something we want. We changed the UPDATE to a PATCH instead, but the problem still persists. Angus may have an idea on how to allow partial updates and we are each investigating for different methods. This is something we will continue to investigate.

Tomorrow we will work on the DELETE method for our game table. Once that is done, we will work on the scores table endpoints and maybe get started on front-end authentication as well.

## April 4th

Today we finished the delete endpoint for the games table. We then started on our scores endpoints. As a group, we worked together for work through the endpoints. We were able to write and merge the POST, GET, and DELETE endpoints for scores. We did have a little trouble at first getting the list of scores so it would show the scores values, the player’s values (ID, first name, last name, etc) and the games values (ID, description,name, picture url). In the end, we had to hard code the game and player data so it would be part of the score when we have a get request for all scores. Tomorrow we’ll work on protecting some of our endpoints and possibly get started on frontend authentication as well. We also will try to find a way to call our update endpoints for our tables and allow partial updates. We have tried different things, but are still having troubles.

## April 5th

As a team, we worked on protecting our endpoints for games, scores, and users. We decided to protect the getting the token, delete and update a user, creating and deleting the score routes, and creating, updating, and deleting a game. This may change, but for now these are the endpoints we have decided to protect. We did work on frontend authentication and we did make some progress, but there are still many gaps. We aren’t entirely sure how to navigate redux. We need to research about it more to fully understand what we are doing. I did find this youtube video and I think it’s helping me understand a little bit with using redux and implementing authentication on the frontend. Tomorrow, we will continue frontend authentication.

## April 6th

Today we continued to work as a group to implement redux and finish frontend authentication. We were able to successfully finish and work through the bugs that we had. We created a sign up, login, logout form. We also plan to allow some alerts from react-toastify as well. We now have a better idea of the flow of things than yesterday so that’s a great sign. Tomorrow we’re planning on creating our nav bar so we can easily navigate through the pages and also work on our quiz game forms. We are going to discuss the best implementation for the quiz game and the leaderboard page as well. So far things have been going well.

## April 7th

Today, we continued to work as a group. We have gotten the react-toastify to work. We started on styling some pages with tailwind/flowbite for the login page. Today was mostly focusing on design ideas and playing around with the designs. We each were assigned a page to work on and decide how to style it over break as well. I’ll be working on the leaderboard. Once break is over, we’ll continue to work on our quiz game page and routing our endpoints.

## April 16th

Today, I worked on the leaderboard design. I worked on it for a few days prior. The design is enough for now and I will present it to the group tomorrow after our break is done. I hardcoded the data used in the leaderboard. I will still need to work on actually getting the data from the scores endpoint to populate the leaderboard table

## April 17th

Today we worked on merging our changes we worked on during the break to main. Then we completed the first part of deployment. We plan on holding of the rest of deployment until we get our quiz game up and running. We also worked on some unit tests as well. We have two done. Tomorrow, we’ll focus on our quiz game.

## April 18th

Today we worked on starting the quiz implementation. We worked on the question page, question set, question result page, and start page and the timer components for the quiz. What we had in mind is the user will be on the start age of the quiz game that will give them a description/instructions for the game. Then it will go to the question set page once the user presses start game (which will also trigger the timer for the quiz). There were many issues that we came across, like getting the start page to go to the question set page, then having the timer also start once the question set page is started, and showing a correct/incorrect sign if the user choose the right answer or not. We also were able to keep the score when it is right. We have those working, but there is still some things we need to work on like getting the score to be saved so we can show them on the leaderboard and getting the leaderboard to work as well. We’ll continue to work on this tomorrow.

## April 19th

Today, we had to modify our migrations table and queries. We added a timer to the scores table and had to modify the scores query as well to reflect the changes. We also ran into issues with the game route because we needed to add the authentication factor so it would allow to create, delete, and update a game. We were able to implement redux for our quiz game so it would be able to store the necessary data for the leaderboard. We decided to have a quizgameSlice so it would be easier to manage the states for the different components in our quiz game. We did run into troubles at first like getting the score to increment correctly again and the timer displaying correctly. We were able to solve the issues and had the quiz running again. Now we are merging our changes today and tomorrow. After the merges are done, we’ll be able to work on our leaderboard to display the scores

## April 20th

Today we worked on finishing our merge requests to the main branch and our game quiz is working as expected. We got started on finishing our leaderboard by populating the scores onto it. We had to make some changes to the queries table to get the the score time to change into an integer. After some modifications to selecting the items and mapping them correctly, we were able to populate the scores data to the table. Next, we worked on creating the profile page for the user. We were able to successfully create it after some modifications and handling errors. In the user page, we also gave the option to delete a score as well. This was also implemented successfully. After this, we took some to clean up our code and fix some minor design issues. The biggest problem we faced today was getting the quiz game to reroute to the start page when the game is ended, once the user presses the restart game button. It took some time, but we eventually got it. We had to tweak some things so the timer would also begin when it the game restarts since the restart button was conflicting with it. Overall, it was a productive day. For the coming weekend, we assigned unit tests. I’ll be working on the create game unit test and maybe do some styling for the game page as well, if I have time.

## April 22nd

wrote create game unit test. will check on Monday if it’s acceptable

## April 24th

Today we worked on merging our changes over the weekend. I merged my unit test and it seemed to pass. Then we also worked on getting the profile page to function. There were many problems, but we were able to get the profile to update any changes that the user wants to make. It also won’t allow them to update their username or email if it already exists in the database. Tomorrow, we’ll work on the creators page and deployment. Then we can also work on styling pages as well.

## April 25th

Today we worked on styling the creator page and fixing some bugs. Then we merged the changes to main. We then began on deployment. We finished part two. Part three had a little more problems so we took some time going through those and fixing the problems. Once we had part three figured out and able to build, we went on to the fourth part of deployment. We were able to get the pages to show on the public url, but for some reason we have to manually do it, otherwise we get a 404 page not found. We’ll be working on fixing this tomorrow.

## April 26th

Today we worked on trying to fix our url routes. We ended up moving our browser router from index.js to app.js and modified our navbar.js. After those changes, we were able to navigate again. We also noticed that the leaderboard posted the scores twice sometimes so we’re trying to get the score to only post once. We were able to fix it by modifying the useEffect and score variable so it only posts once and not twice. Were still getting the cors error from yesterday, but were told not to worry too much about it. Our pages are running and everything seems to be working as well. So we are focusing on styling our pages now and getting the readme started as well.

## April 27th

Today we finished our README.MD files and are getting ready to present our final project!
