import React from 'react';
import NotFoundImg from '../../images/404page.png';
import * as Constants from '../../utils/constants';

export default function PageNotFound() {
  return (
    <img width='100%' src={NotFoundImg} alt={Constants.NOT_FOUND_IMG_ALT} />
  );
}
