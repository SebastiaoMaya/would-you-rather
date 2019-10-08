import React from 'react';
import { connect } from 'react-redux';
import { getScoreObject } from '../../utils/helpers';
import UserScore from './UserScore';

const Leaderboard = ({ userScores }) => {
  return userScores.map((userScore, index) => (
    <UserScore key={userScore.id} userScore={userScore} place={index + 1} />
  ));
};

const mapStateToProps = ({ users, questions }) => ({
  userScores: Object.keys(users)
    .map(key => getScoreObject(questions, key))
    .sort(
      (a, b) =>
        b.createdQuestions + b.answers - (a.createdQuestions + a.answers)
    )
});

export default connect(mapStateToProps)(Leaderboard);
