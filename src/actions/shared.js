import { hideLoading, showLoading } from 'react-redux-loading';
import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { receiveQuestions, unvoteQuestion, voteQuestion } from './questions';
import {
  receiveUsers,
  removeUserVoteFromQuestion,
  userVotedOnQuestion
} from './users';

export const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
};

/**
 *
 * @param {authedUser, qid, answer} info
 * answer is either optionOne or optionTwo
 */
export const handleVoteQuestion = info => dispatch => {
  dispatch(voteQuestion(info));
  dispatch(userVotedOnQuestion(info));

  return saveQuestionAnswer(info).catch(e => {
    console.log('Error in handleVoteQuestion: ', e);
    dispatch(unvoteQuestion(info));
    dispatch(removeUserVoteFromQuestion(info));
    alert('There was an error voting on the question. Try again.');
  });
};
