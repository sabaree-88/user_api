import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = process.env.MONGODBURI;

export const connection = mongoose
  .connect(DB)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
