import { Post, createPostInputDTO, POST_TYPE } from "../models/Post";
import { PostDatabase } from "../database/PostDatabase";
import IdGenerator from "../services/IdGenerator";
import Authenticator from "../services/Authenticator";
import UserDB from "../database/UserDatabase";

export class PostBusiness {
  public static async createPost(input: createPostInputDTO): Promise<Post> {
    const { token, image, description, type }: createPostInputDTO = input;

    if (!token) {
      throw new Error(`Unauthorized: please login or signup`)
    }

    const { id: userId } = Authenticator.getTokenData(token);

    const userDB = new UserDB();
    const user = await userDB.getUserById(userId);

    if (!user) {
      throw new Error(`Unauthorized: please login or signup`)
    }

    if (!image || !description || !type) {
      throw new Error(`Missing one or more required fields: image, description and type.`);
    }

    if (!Object.values(POST_TYPE).includes(type)) {
      throw new Error(`Invalid type: must be equal to NORMAL or EVENT`)
    }

    const id = IdGenerator.generate();

    const post = new Post(
      image,
      description,
      type,
      new Date,
      id,
      userId
    );

    const postDatabase = new PostDatabase();
    return postDatabase.createPost(post);
  }
}