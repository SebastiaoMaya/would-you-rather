import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import * as Constants from '../../utils/constants';

class AnsweredDetails extends Component {
  render() {
    const { question, users } = this.props;

    return (
      <CardBody>
        <CardTitle>
          {Constants.USER_ASKED_BY + users[question.author].name}
        </CardTitle>
        <CardSubtitle>{Constants.RESULTS}</CardSubtitle>
        <CardText></CardText>
      </CardBody>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser
});

export default connect(mapStateToProps)(AnsweredDetails);
