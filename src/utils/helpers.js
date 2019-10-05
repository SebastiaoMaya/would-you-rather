export function alreadyVoted(questions, index, user) {
  return (
    questions[index].optionOne.votes.includes(user) ||
    questions[index].optionTwo.votes.includes(user)
  );
}

export function truncate(source, size) {
  return source.length > size ? source.slice(0, size - 1) + '…' : source;
}
