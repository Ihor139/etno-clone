import express, {Application} from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import {
  ProductRouter,
  NavigationRouter,
  PostRouter,
  CartRouter,
  SearchRouter,
  UserRouter,
  GuestRouter
} from "./routes";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL: string = (process.env.MONGO_URL as string);

mongoose.connect(MONGO_URL).then(() => {
  console.log("db ok");
}).catch((err) => {
  console.log("db error: " + err);
});

const app: Application = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/upload", express.static("upload"));

app.use('/api', [
  ProductRouter,
  UserRouter,
  GuestRouter,
  NavigationRouter,
  PostRouter,
  CartRouter,
  SearchRouter,
]);

app.listen(PORT, (): void => {
  console.log(`Server Running here https://localhost:${PORT}`);
});
