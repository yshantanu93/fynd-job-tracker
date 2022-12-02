import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import mongoose from "mongoose";
import history from "connect-history-api-fallback";

import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import authenticateUser from "./middleware/authenticate.js";

app.use(history());
app.use(express.json());
app.use(express.static("./frontend/dist"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const connectDB = (url) => {
  return mongoose.connect(url);
};

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
