import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row
} from 'reactstrap';
import * as Constants from '../../utils/constants';

const UserScore = props => {
  const { users, userScore, place } = props;
  const score = userScore.answers + userScore.createdQuestions;

  return (
    <Row>
      <Col>
        <Card>
          <Row className='no-gutters'>
            <Col md='4'>
              <CardImg src={users[userScore.id].avatarURL} alt='Author' />
            </Col>
            <Col md='6'>
              <CardBody>
                <CardTitle>{users[userScore.id].name}</CardTitle>
                <CardText>
                  <span>
                    {Constants.ANSWERED_QUESTIONS + ': ' + userScore.answers}
                  </span>
                  <br />
                  <span>
                    {Constants.CREATED_QUESTIONS +
                      ': ' +
                      userScore.createdQuestions}
                  </span>
                </CardText>
              </CardBody>
            </Col>
            <Col md='2'>
              <CardBody>
                <CardText>
                  <span>{Constants.SCORE + ': ' + score}</span>
                  <br />
                  <span>{Constants.PLACE_NUMBER + ': ' + place}</span>
                </CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ users }, { userScore, place }) => ({
  users,
  userScore,
  place
});

export default connect(mapStateToProps)(UserScore);
