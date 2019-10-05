import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getScoreObject } from '../../utils/helpers';
import Login from '../login/Login';
import UserScore from './UserScore';

class Leaderboard extends Component {
  render() {
    const { authedUser, userScores } = this.props;

    return (
      <div>
        {!authedUser ? (
          <Login />
        ) : (
          userScores.map((userScore, index) => (
            <UserScore
              key={userScore.id}
              userScore={userScore}
              place={index + 1}
            />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }) => ({
  authedUser,
  userScores: Object.keys(users)
    .map(key => getScoreObject(questions, key))
    .sort(
      (a, b) =>
        b.createdQuestions + b.answers - (a.createdQuestions + a.answers)
    )
});

export default connect(mapStateToProps)(Leaderboard);
