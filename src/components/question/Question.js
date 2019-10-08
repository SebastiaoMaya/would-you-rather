import React from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, Col, Row } from 'reactstrap';
import * as Constants from '../../utils/constants';
import AnsweredDetails from './AnsweredDetails';
import SimplifiedDetails from './SimplifiedDetails';
import UnansweredDetails from './UnansweredDetails';

const Question = ({ question, questionType, users }) => {
  let details;

  switch (questionType) {
    case Constants.SIMPLIFIED_QUESTION_TYPE:
      details = (
        <SimplifiedDetails
          question={question}
          user_name={users[question.author].name}
        />
      );
      break;
    case Constants.UNANSWERED_QUESTION_TYPE:
      details = <UnansweredDetails question={question} />;
      break;
    case Constants.ANSWERED_QUESTION_TYPE:
      details = <AnsweredDetails question={question} />;
      break;
    default:
      break;
  }

  return (
    <Row>
      <Col>
        <Card>
          <Row className='no-gutters'>
            <Col md='4'>
              <CardImg src={users[question.author].avatarURL} alt='Author' />
            </Col>
            <Col md='8'>{details}</Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ questions, authedUser, users }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question,
    users
  };
};

export default connect(mapStateToProps)(Question);
