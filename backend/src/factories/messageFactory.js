export const errors = [
  {
    code: 400,
    messages: {
      noUsername: 'Username is required',
      noPassword: 'Password is required',
      bothMissing: 'Password and username are required',
    },
  },
  {
    code: 401,
    messages: {
      incorrectCredential: 'Username or password is incorrect.',
      invalidToken: 'Invalid token',
    },
  },
  {
    code: 409,
    messages: {
      usernameOccupied: 'Username is already taken',
    },
  },
];

export const errorTypes = {
  noUsername: 'noUsername',
  noPassword: 'noPassword',
  bothMissing: 'bothMissing',
  incorrectCredential: 'incorrectCredential',
  invalidToken: 'invalidToken',
  usernameOccupied: 'usernameOccupied',
};

export function createErrorMessage(type) {
  let neededError = errors.filter(err => err.messages[type])[0];
  if (!neededError) {
    return {
      status: 'error',
      code: 500,
      message: 'Server error.',
    };
  }

  return {
    status: 'error',
    message: neededError.messages[type],
    code: neededError.code,
  };
}

export function createMessage(err) {
  if (err.message == 'Server error') console.error(err);
  return {
    status: err.status,
    message: err.message,
  };
}
