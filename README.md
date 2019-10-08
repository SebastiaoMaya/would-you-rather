# Would You Rather Project

This project lets the user play the "would you rather" game, see the statistics about existing polls, create new polls and vote on polls.

## How to install the project

- clone the repository
- cd to the main directory
- npm install
- npm start

## State of the App

- users - object with users
- questions - object with questions
- authedUser - id of the authenticated user
- loadingBar - loading bar reducer to display a loading bar
- loaded - flag to understand if the app has loaded or not

### Users

- RECEIVE_USERS - action to receive all users
- USER_VOTED_ON_QUESTION - action for a user to vote on a question - adds an object {qid: answer} to the user answers object
- REMOVE_USER_VOTE_FROM_QUESTION - fallback action in case USER_VOTED_ON_QUESTION fails

### Questions

- RECEIVE_QUESTIONS - action to receive all questions
- VOTE_QUESTION - action for a question to be voted on - adds the user id to the votes array of the specific answer
- UNVOTE_QUESTION - fallback action in case VOTE_QUESTION fails
- ADD_QUESTION - creates a new question object and adds it to the state

### authedUser

- SET_AUTHED_USER - action that sets the authedUser to the user id
- REMOVE_AUTHED_USER - action that sets the authedUser to null

### loaded

- LOADING_IS_DONE - action that sets the flag "loaded" to true (this flag starts at false)

## Component structure

- All the components are under a specific folder which means that they are related with each of the other components on the same folder

- Question component is the parent of the "AnsweredDetails", "UnansweredDetails" and "SimplifiedDetails" since it shares the same avatar with all and only the details of the card are changed

## Styling

- Used reactstrap for all the styling of the app
