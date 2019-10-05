import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, Col, Row } from 'reactstrap';
import * as Constants from '../../utils/constants';
import SimplifiedDetails from './SimplifiedDetails';

class Question extends Component {
  renderQuestion = () => {
    const { question, questionType, users } = this.props;

    let details;

    switch (questionType) {
      case Constants.SIMPLIFIED_QUESTION_TYPE:
        details = <SimplifiedDetails question={question} />;
        break;
      default:
        details = <div>Other</div>;
        break;
    }

    return (
      <Row>
        <Col>
          <Card>
            <Row className='no-gutters'>
              <Col md='4'>
                <CardImg
                  top
                  max-width='100px !important'
                  src={users[question.author].avatarURL}
                  alt='Author'
                />
              </Col>
              <Col md='8'>{details}</Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  };

  render() {
    return <div>{this.renderQuestion()}</div>;
  }
}

const mapStateToProps = ({ questions, authedUser, users }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question,
    users
  };
};

export default withRouter(connect(mapStateToProps)(Question));
