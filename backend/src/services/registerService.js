import bcrypt from 'bcryptjs';
import { User } from '../models/User';
import { validateInputs } from './validateInputs';
import { createErrorMessage, errorTypes } from '../factories';

export const registerService = {
  async registration(credentials) {
    let { username, password } = credentials;
    await this.validateCredentials(username, password);
    let userId = await this.createUser(username, password);

    let result = {
      userName: username,
      userId,
    };

    return result;
  },

  async validateCredentials(username, password) {
    validateInputs(username, password);
    let usernameValidation = await User.findUsername(username);
    if (usernameValidation.length == 1)
      throw createErrorMessage(errorTypes.usernameOccupied);
    return true;
  },

  async createUser(username, password) {
    let user = await User.addNewUser({
      user_name: username,
      password: bcrypt.hashSync(password, 10),
    });
    return user;
  },
};
