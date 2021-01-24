import { registerService } from '../services/registerService';

export const registerController = {
  async post(req, res, next) {
    try {
      let result = await registerService.registration(req.body);
      let { userId, userName } = result;
      let message = {
        userId,
        userName,
      };
      res.status(201).json(message);
    } catch (err) {
      next(err)
    }
  },
};