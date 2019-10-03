import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';

class Homepage extends Component {
  render() {
    const { authedUser } = this.props;
    return <div>{!authedUser ? <Login /> : <Dashboard />}</div>;
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(Homepage);
