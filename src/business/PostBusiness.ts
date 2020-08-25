import { Post, createPostInputDTO } from "../models/Post";
import { PostDatabase } from "../database/PostDatabase";
import IdGenerator from "../services/IdGenerator";

export class PostBusiness {
  static async createPost(input: createPostInputDTO): Promise<Post> {
    const { image, description, createdAt, type }: createPostInputDTO = input;

    if (!image || !description || !type) {
      throw new Error(`Missing one or more required fields: image, description and type.`);
    }

    const id = IdGenerator.generate();

    const post = new Post(
      image,
      description,
      type,
      createdAt || new Date,
      id
    );

    const postDatabase = new PostDatabase();
    return postDatabase.createPost(post);
  }
}