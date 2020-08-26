import dotenv from "dotenv";
import express from "express";

import { AddressInfo } from "net";
import { postRouter } from './routers/postRouter';
import { userRouter } from "./routers/userRouter";
import { friendRouter } from "./routers/friendRouter";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/friend", friendRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at http://localhost:${address.port}`);
  } else {
    console.log(`Server failed to start`);
  }
});
