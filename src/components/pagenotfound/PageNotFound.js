import React from 'react';
import NotFoundImg from '../../images/404page.png';
import * as Constants from '../../utils/constants';

const PageNotFound = () => {
  return (
    <img width='100%' src={NotFoundImg} alt={Constants.NOT_FOUND_IMG_ALT} />
  );
};

export default PageNotFound;
