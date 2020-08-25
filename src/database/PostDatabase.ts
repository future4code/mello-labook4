import BaseDB from './BaseDatabase'
import { Post } from "../models/Post"

export class PostDatabase extends BaseDB {
  private static TABLE_NAME = "Posts"

  public async createPost(post: Post): Promise<Post> {
    console.log(post)

    await this.getConnection()
      .insert({
        id: post.getId(),
        image: post.getImage(),
        description: post.getDescription(),
        created_at: post.getCreatedAt().toString(),
        type: post.getType()
      })
      .into(PostDatabase.TABLE_NAME);

    return post;
  }
}