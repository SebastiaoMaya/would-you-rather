import {
  RECEIVE_USERS,
  REMOVE_USER_VOTE_FROM_QUESTION,
  USER_VOTED_ON_QUESTION
} from '../actions/users';

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case USER_VOTED_ON_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.answer
          }
        }
      };
    case REMOVE_USER_VOTE_FROM_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: Object.keys(state[action.authedUser].answers)
            .filter(id => id !== action.id)
            .reduce((res, id) => Object.assign(res, { [id]: res[id] }), {})
        }
      };
    default:
      return state;
  }
};

export default users;
