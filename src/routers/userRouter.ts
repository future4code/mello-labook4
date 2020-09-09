import { Router } from "express";

import signup from "../controller/signup";
import { getFeed } from "../controller/getFeed";

export const userRouter = Router();

userRouter.post('/signup', signup)
userRouter.get('/feed', getFeed)