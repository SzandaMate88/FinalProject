import { createErrorMessage, errorTypes } from '../factories';
const jwt = require('jsonwebtoken');

export function authToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    throw createErrorMessage(errorTypes.invalidToken);
  }
  req.user = { userName: decoded.userName };
  next();
}