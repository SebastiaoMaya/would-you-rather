import {
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
  UNVOTE_QUESTION,
  VOTE_QUESTION
} from '../actions/questions';

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case ADD_QUESTION:
      return { ...state, [action.question.id]: action.question };
    case VOTE_QUESTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: state[action.id][action.answer].votes.concat([
              action.authedUser
            ])
          }
        }
      };
    case UNVOTE_QUESTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: state[action.id][action.answer].votes.filter(
              uid => uid !== action.authedUser
            )
          }
        }
      };
    default:
      return state;
  }
};

export default questions;
