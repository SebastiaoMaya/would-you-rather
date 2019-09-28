import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeAuthedUser } from '../../actions/authedUser';

class LogoutNavBar extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(removeAuthedUser());
  };

  render() {
    const { authedUser, users } = this.props;

    return (
      <div className='nav-link'>
        {authedUser && (
          <div onClick={this.handleLogout} className='navbar-logout'>
            <span>{users[authedUser].name}, </span>
            <span>Logout</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users
});

export default connect(mapStateToProps)(LogoutNavBar);
