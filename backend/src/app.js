import express from 'express';
import bodyParser from 'body-parser';
import {db} from "./data/connection";
import mysql from "mysql";

const app = express()

app.use(bodyParser.json());

const querry = "SELECT * from beers";

db.query(querry, (err, rows) => {
  if (err) {
    console.log(err)
  } else {
    console.log((rows));
  }
})

export default app;