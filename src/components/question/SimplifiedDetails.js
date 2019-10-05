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
  const { question } = props;
  const id = question.id;

  return (
    <CardBody>
      <CardTitle>{question.author + ' ' + Constants.USER_ASKS}</CardTitle>
      <CardSubtitle>{Constants.WOULD_YOU_RATHER}</CardSubtitle>
      <CardText>
        {truncate(question.optionOne.text, Constants.SIMPLIFIED_STRING_SIZE)}
      </CardText>
      <Button>
        <Link to={`/question/${id}`}> {Constants.VIEW_POLL}</Link>
      </Button>
    </CardBody>
  );
};

export default SimplifiedDetails;
