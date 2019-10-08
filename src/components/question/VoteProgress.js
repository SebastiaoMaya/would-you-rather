import React from 'react';
import { Card, CardSubtitle, CardTitle } from 'reactstrap';
import * as Constants from '../../utils/constants';
import VoteProgressBar from './VoteProgressBar';

const VoteProgress = ({ option, voted, numVotes, total }) => {
  let getPercentage = num => {
    return Math.round(num * 1000) / 10;
  };

  return (
    <Card body inverse={voted} color={voted ? 'success' : ''}>
      <CardTitle>
        <strong>{Constants.WOULD_YOU_RATHER + ' ' + option}</strong>
      </CardTitle>
      {voted && <CardSubtitle> {Constants.VOTED_HERE}</CardSubtitle>}
      <VoteProgressBar progress={getPercentage(numVotes / total)} />
      <span>
        {numVotes} {Constants.OUT_OF} {total} {Constants.VOTES}
      </span>
    </Card>
  );
};

export default VoteProgress;
