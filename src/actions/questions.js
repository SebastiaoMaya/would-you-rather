import { hideLoading, showLoading } from 'react-redux-loading';
import { saveQuestion } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const VOTE_QUESTION = 'VOTE_QUESTION';
export const UNVOTE_QUESTION = 'UNVOTE_QUESTION';

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const voteQuestion = ({ id, authedUser, answer }) => ({
  type: VOTE_QUESTION,
  id,
  authedUser,
  answer
});

export const unvoteQuestion = ({ id, authedUser, answer }) => ({
  type: UNVOTE_QUESTION,
  id,
  authedUser,
  answer
});

const addQuestion = question => ({
  type: ADD_QUESTION,
  question
});

export const handleAddQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
};
