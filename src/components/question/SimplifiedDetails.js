import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';
import * as Constants from '../../utils/constants';
import { truncate } from '../../utils/helpers';

const SimplifiedDetails = props => {
  const { question, user_name } = props;
  const id = question.id;
  const textToTruncate =
    question.optionOne.text + ' or ' + question.optionTwo.text;

  return (
    <CardBody>
      <CardTitle>{user_name + ' ' + Constants.USER_ASKS}</CardTitle>
      <CardSubtitle>{Constants.WOULD_YOU_RATHER}</CardSubtitle>
      <CardText>
        {truncate(textToTruncate, Constants.SIMPLIFIED_STRING_SIZE)}
      </CardText>

      <Link to={`/question/${id}`}>
        <Button>{Constants.VIEW_POLL}</Button>
      </Link>
    </CardBody>
  );
};

export default SimplifiedDetails;
