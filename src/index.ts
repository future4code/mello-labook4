import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";

import { postRouter } from './routers/postRouter';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/post', postRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running at http://localhost:${address.port}`);
  } else {
    console.log(`Server failed to start`);
  }
});
