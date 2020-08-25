import { Request, Response } from 'express'
import { createPostInputDTO } from "../models/Post"
import { PostBusiness } from "../business/PostBusiness"
import BaseDB from "../database/BaseDatabase";

export async function createPost(req: Request, res: Response) {
  try {

    const input: createPostInputDTO = {
      image: req.body.image,
      description: req.body.description,
      createdAt: req.body.createdAt,
      type: req.body.type
    }

    const post = await PostBusiness.createPost(input);

    res.status(200).send({ message: `Post created successfully`, post });
  } catch (error) {
    res.status(400).send({ message: error.message, sqlMessage: error.sqlMessage });
  } finally {
    await BaseDB.destroyConnection();
  }
}