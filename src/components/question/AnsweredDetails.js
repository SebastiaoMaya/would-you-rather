import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import * as Constants from '../../utils/constants';
import { votedOnQuestion } from '../../utils/helpers';
import VoteProgress from './VoteProgress';

class AnsweredDetails extends Component {
  render() {
    const { question, users, authedUser } = this.props;

    const votesOnOptionOne = question[Constants.OPTION_ONE].votes.length;
    const votesOnOptionTwo = question[Constants.OPTION_TWO].votes.length;
    const total = votesOnOptionOne + votesOnOptionTwo;

    return (
      <CardBody>
        <CardTitle>
          {Constants.USER_ASKED_BY + users[question.author].name}
        </CardTitle>
        <CardSubtitle>{Constants.RESULTS}</CardSubtitle>
        <VoteProgress
          option={question.optionOne.text}
          voted={votedOnQuestion(question, Constants.OPTION_ONE, authedUser)}
          numVotes={votesOnOptionOne}
          total={total}
        />
        <VoteProgress
          option={question.optionTwo.text}
          voted={votedOnQuestion(question, Constants.OPTION_TWO, authedUser)}
          numVotes={votesOnOptionTwo}
          total={total}
        />
      </CardBody>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser
});

export default connect(mapStateToProps)(AnsweredDetails);
