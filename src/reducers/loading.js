import { LOADING_IS_DONE } from '../actions/loading';

const loading = (state = false, action) => {
  switch (action.type) {
    case LOADING_IS_DONE:
      return true;
    default:
      return state;
  }
};

export default loading;
