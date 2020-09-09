import BaseDB from './BaseDatabase'
import { Post } from "../models/Post"

export class PostDatabase extends BaseDB {
  private static TABLE_NAME = "Posts"

  public async createPost(post: Post): Promise<Post> {
    await this.getConnection()
      .insert({
        id: post.getId(),
        image: post.getImage(),
        description: post.getDescription(),
        created_at: post.getCreatedAt().toString(),
        type: post.getType(),
        user_id: post.getUserId()
      })
      .into(PostDatabase.TABLE_NAME);

    return post;
  }

  public async getAllPosts(): Promise<Post[]> {
    const posts: Post[] = await this.getConnection()
      .from(PostDatabase.TABLE_NAME)

    return posts;
  }
}