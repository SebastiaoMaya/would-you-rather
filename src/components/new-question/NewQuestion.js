import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from '../login/Login';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  };

  handleChange = e => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;

    const { dispatch, id } = this.props;

    //dispatch(handleAddTweet(text, id));

    this.setState(() => ({ text: '', toHome: id ? false : true }));
  };
  render() {
    const { authedUser } = this.props;
    const { toHome, optionOne, optionTwo } = this.state;

    if (toHome) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        {!authedUser ? (
          <Login />
        ) : (
          <div>
            <h3> Create new question</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                id='optionOne'
                value={optionOne}
                onChange={this.handleChange}
              />
              <br />
              OR
              <br />
              <input
                type='text'
                id='optionTwo'
                value={optionTwo}
                onChange={this.handleChange}
              />
              <button
                type='submit'
                disabled={optionOne === '' || optionTwo === ''}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(NewQuestion);
