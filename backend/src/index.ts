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
import {GuestController} from "./controllers";

dotenv.config();
const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

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
app.use(cors(corsOptions));
app.use("/upload", express.static("upload"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.get("/", GuestController.add);

app.use('/api', [
  ProductRouter,
  UserRouter,
  // GuestRouter,
  NavigationRouter,
  PostRouter,
  CartRouter,
  SearchRouter,
]);

app.listen(PORT, (): void => {
  console.log(`Server Running here https://localhost:${PORT}`);
});
