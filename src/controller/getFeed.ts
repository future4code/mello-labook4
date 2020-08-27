import { Post } from "../models/Post";
import BaseDB from "../database/BaseDatabase";

import { Request, Response } from 'express'
import { UserBusines } from "../business/UserBusiness";

export async function getFeed(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization;
    const feed: Post[] = await UserBusines.getFeed(token);

    res.status(200).send({ message: `Got feed successfully`, feed })
  } catch (error) {
    res.status(400).send({ message: error.message, sqlMessage: error.sqlMessage })
  } finally {
    await BaseDB.destroyConnection();
  }
}