import { response } from 'express';
import { db } from '../data/connection';

const dbTable = 'users';

export let User = function () {};

User.addNewUser = async credentials => {
  const q = `INSERT INTO ${dbTable} SET ?;`;
  const newUser = await db.query(q, [credentials]);
  return newUser.results.insertId;
};

User.findUsername = async username => {
  const q = `SELECT * FROM ${dbTable} WHERE user_name=?`;
  const usernameFound = await db.query(q, [username]);
  return usernameFound.results;
};