import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Constants from '../../utils/constants';
import { alreadyVoted } from '../../utils/helpers';
import Login from '../login/Login';
import PageNotFound from '../pagenotfound/PageNotFound';
import Question from './Question';

class QuestionPage extends Component {
  render() {
    //question type varies if the authedUser has answered it or not
    const { authedUser, questions, id } = this.props;

    if (!questions[id]) {
      return <PageNotFound />;
    }

    const questionType = alreadyVoted(questions, id, authedUser)
      ? Constants.ANSWERED_QUESTION_TYPE
      : Constants.UNANSWERED_QUESTION_TYPE;

    return (
      <div>
        {!authedUser ? (
          <Login />
        ) : (
          <Question id={id} questionType={questionType} />
        )}
      </div>
    );
  }
}

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
