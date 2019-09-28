import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import { setAuthedUser } from '../../actions/authedUser';
import Logo from '../../images/would_you_rather_logo.jpg';
import * as Constants from '../../utils/constants';

class Login extends Component {
  state = { value: Constants.SELECT_USER_OPTION_VALUE };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { value } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthedUser(value));
  };

  render() {
    const { users } = this.props;

    return (
      <div className='container'>
        <Card body className='text-center'>
          <CardTitle>{Constants.WELCOME_MSG}</CardTitle>
          <CardText>{Constants.PLEASE_SIGN_IN}</CardText>
          <CardImg
            top
            width='100%'
            src={Logo}
            alt={Constants.WOULD_YOU_RATHER_IMG_ALT}
          />
          <br />
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for='exampleSelect'>{Constants.SIGN_IN}</Label>
              <Input
                type='select'
                name='sign-in-select'
                id='sign-in-select'
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value={Constants.SELECT_USER_OPTION_VALUE} disabled>
                  {Constants.SELECT_A_USER}
                </option>
                {Object.keys(users).map(key => (
                  <option key={users[key].id} value={users[key].id}>
                    {users[key].name}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <Button
              type='submit'
              disabled={this.state.value === Constants.SELECT_USER_OPTION_VALUE}
            >
              {Constants.SIGN_IN}
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users
});

export default connect(mapStateToProps)(Login);
