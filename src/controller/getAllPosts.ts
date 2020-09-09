import { Request, Response } from 'express'
import BaseDB from '../database/BaseDatabase'
import { PostBusiness } from '../business/PostBusiness'

export async function getAllPosts(req: Request, res: Response): Promise<any> {
  try {
    const posts = await PostBusiness.getAllPosts();

    res.status(200).send({ message: `Got all posts successfully`, posts })
  } catch (error) {
    res.status(400).send({ message: error.message, sqlMessage: error.sqlMessage })
  } finally {
    await BaseDB.destroyConnection();
  }
}