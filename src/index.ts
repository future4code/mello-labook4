import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express";

import { postRouter } from './routers/postRouter';
import signup from "./endpoints/signup";
import { userRouter } from "./routers/userRouter";

dotenv.config();

const app = express();
app.use(express.json());

app.use('/post', postRouter);
app.use("/user", userRouter)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at http://localhost:${address.port}`);
  } else {
    console.log(`Server failed to start`);
  }
});
