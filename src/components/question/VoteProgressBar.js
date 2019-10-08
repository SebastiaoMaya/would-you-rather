import React from 'react';
import { Progress } from 'reactstrap';

const VoteProgressBar = ({ progress }) => {
  return (
    <div>
      <div className='text-center'>{progress}%</div>
      <Progress value={progress} />
    </div>
  );
};

export default VoteProgressBar;
