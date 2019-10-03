import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../login/Login';

class Question extends Component {
  render() {
    const { authedUser } = this.props;
    return <div>{!authedUser ? <Login /> : 'Question'}</div>;
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(Question);
