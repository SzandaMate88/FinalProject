import { createErrorMessage, errorTypes } from '../factories';

export function validateInputs(username, password) {
  if (!username && password) {
    throw createErrorMessage(errorTypes.noUsername);
  } else if (username && !password) {
    throw createErrorMessage(errorTypes.noPassword);
  } else if (!username && !password) {
    throw createErrorMessage(errorTypes.bothMissing);
  } else {
    return true;
  }
}