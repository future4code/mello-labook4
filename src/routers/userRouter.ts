import { Router } from "express";

import signup from "../endpoints/signup";

export const userRouter = Router();

userRouter.post('/signup', signup)