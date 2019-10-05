import React from 'react';
import { Progress } from 'reactstrap';

export default function VoteProgressBar(props) {
  const { progress } = props;

  return (
    <div>
      <div className='text-center'>{progress}%</div>
      <Progress value={progress} />
    </div>
  );
}
