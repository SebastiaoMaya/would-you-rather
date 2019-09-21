export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_VOTED_ON_QUESTION = 'USER_VOTED_ON_QUESTION';
export const REMOVE_USER_VOTE_FROM_QUESTION = 'REMOVE_USER_VOTE_FROM_QUESTION';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const userVotedOnQuestion = ({ id, authedUser, answer }) => ({
  type: USER_VOTED_ON_QUESTION,
  id,
  authedUser,
  answer
});

export const removeUserVoteFromQuestion = ({ id, authedUser, answer }) => ({
  type: USER_VOTED_ON_QUESTION,
  id,
  authedUser,
  answer
});
