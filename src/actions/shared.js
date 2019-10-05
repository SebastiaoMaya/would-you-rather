import { hideLoading, showLoading } from 'react-redux-loading';
import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { loadingIsDone } from './loaded';
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
      dispatch(loadingIsDone());
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

  const { authedUser, id, answer } = info;

  const dataInfo = {
    authedUser: authedUser,
    qid: id,
    answer: answer
  };

  return saveQuestionAnswer(dataInfo).catch(e => {
    console.log('Error in handleVoteQuestion: ', e);
    dispatch(unvoteQuestion(info));
    dispatch(removeUserVoteFromQuestion(info));
    alert('There was an error voting on the question. Try again.');
  });
};
