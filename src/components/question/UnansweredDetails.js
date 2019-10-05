import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { handleVoteQuestion } from '../../actions/shared';
import * as Constants from '../../utils/constants';

class UnansweredDetails extends Component {
  state = {
    selectedOption: Constants.OPTION_ONE
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { selectedOption } = this.state;
    const { dispatch, authedUser, question } = this.props;

    dispatch(
      handleVoteQuestion({
        authedUser: authedUser,
        id: question.id,
        answer: selectedOption
      })
    );
  };

  render() {
    const { question, users } = this.props;

    return (
      <CardBody>
        <CardTitle>
          {users[question.author].name + Constants.USER_ASKS}
        </CardTitle>
        <CardSubtitle>{Constants.WOULD_YOU_RATHER}</CardSubtitle>
        <form onSubmit={this.handleFormSubmit}>
          <div className='form-check'>
            <label>
              <input
                type='radio'
                value={Constants.OPTION_ONE}
                checked={this.state.selectedOption === Constants.OPTION_ONE}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
              {question.optionOne.text}
            </label>
          </div>
          <span>OR</span>
          <div className='form-check'>
            <label>
              <input
                type='radio'
                value={Constants.OPTION_TWO}
                checked={this.state.selectedOption === Constants.OPTION_TWO}
                onChange={this.handleOptionChange}
                className='form-check-input'
              />
              {question.optionTwo.text}
            </label>
          </div>
          <Button type='submit'>{Constants.SUBMIT}</Button>
        </form>
      </CardBody>
    );
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
  users,
  authedUser
});

export default connect(mapStateToProps)(UnansweredDetails);
