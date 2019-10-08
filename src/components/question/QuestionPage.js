import React from 'react';
import { connect } from 'react-redux';
import * as Constants from '../../utils/constants';
import { alreadyVoted } from '../../utils/helpers';
import PageNotFound from '../pagenotfound/PageNotFound';
import Question from './Question';

const QuestionPage = ({ authedUser, questions, id }) => {
  //question type varies if the authedUser has answered it or not
  if (!questions[id]) {
    return <PageNotFound />;
  }

  const questionType = alreadyVoted(questions, id, authedUser)
    ? Constants.ANSWERED_QUESTION_TYPE
    : Constants.UNANSWERED_QUESTION_TYPE;

  return <Question id={id} questionType={questionType} />;
};

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params;

  return {
    authedUser,
    questions,
    users,
    id
  };
};

export default connect(mapStateToProps)(QuestionPage);
