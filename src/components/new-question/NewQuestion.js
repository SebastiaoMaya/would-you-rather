import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Card,
  CardSubtitle,
  CardTitle,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { handleAddQuestion } from '../../actions/questions';
import * as Constants from '../../utils/constants';
import Login from '../login/Login';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  };

  handleChange = e => {
    const text = e.target.value;
    const option = e.target.id;

    this.setState(() => ({
      [option]: text
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const { optionOne, optionTwo } = this.state;

    dispatch(handleAddQuestion(optionOne, optionTwo));

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
          <Card body>
            <CardTitle>{Constants.CREATE_NEW_QUESTION}</CardTitle>
            <CardSubtitle>{Constants.WOULD_YOU_RATHER}</CardSubtitle>
            <br />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  type='text'
                  id={Constants.OPTION_ONE}
                  placeholder={Constants.ENTER_OPTION_ONE_TEXT}
                  value={optionOne}
                  onChange={this.handleChange}
                />
                <span>OR</span>
                <Input
                  type='text'
                  id={Constants.OPTION_TWO}
                  placeholder={Constants.ENTER_OPTION_TWO_TEXT}
                  value={optionTwo}
                  onChange={this.handleChange}
                />
                <br />
                <Button
                  type='submit'
                  disabled={optionOne === '' || optionTwo === ''}
                >
                  {Constants.SUBMIT}
                </Button>
              </FormGroup>
            </Form>
          </Card>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(NewQuestion);
