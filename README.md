
# smart-cookkie-app

## Backend

 ### What id does:
 - seeds "Users" collection with a single user.
 - registers the user as a subscriber.
 - registers a route (http://localhost:3000/subscribers) to get a list of all subscribers. 

 ### Modules Used:
 - express.
 - firebase.
 - drip-nodejs.
 - nodemon.

 ### Setup 
    npm install
 ### Run
    npm run start

OR
    
    npm run dev

## Frontend 
 A simple single page html file.

 ### Question Model 
  It has following properties.
  - seconds - **number**, indicates video duration at which it has to stop.
  - options - **array of numbers** to show as options for a question in video.
  - answer - **number**, indicates the write answer out of given options.
  - isAnswered - **boolean**, to keep track of remaining questions. Initial value is "false".

 Feel free to add your own question objects in the **questions** array!
 ### Question Break points in seconds:
  time breakpoints for currently added questions.
  - 59 seconds
  - 89 seconds
  - 119 seconds
  - 164 seconds
  - 224 seconds


