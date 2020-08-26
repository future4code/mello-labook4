import { Request, Response } from 'express'
import BaseDB from '../database/BaseDatabase'

export async function getAllPosts(req: Request, res: Response): Promise<any> {
  try {
    res.status(200).send({ message: `Get all posts success` })
  } catch (error) {
    res.status(400).send({ message: error.message, sqlMessage: error.sqlMessage })
  } finally {
    await BaseDB.destroyConnection();
  }
}