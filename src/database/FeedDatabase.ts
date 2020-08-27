import BaseDB from "./BaseDatabase";

export class FeedDatabase extends BaseDB {
  public async getFeed(userId: string): Promise<any> {
    const result = await this.getConnection().raw(`
      SELECT 
        user_id AS friendId,
        image,
        description,
        created_at AS createdAt,
        type
      FROM Posts
      JOIN friend_labook
      ON friend_labook.friend = Posts.user_id
      AND (friend_labook.user = '${userId}' OR friend_labook.friend = '${userId}')
      JOIN user_labook
      ON friend_labook.user = user_labook.id;
    `);

    return result[0];
  }
}

