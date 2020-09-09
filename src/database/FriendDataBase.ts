import BaseDB from './BaseDatabase';

export default class FriendDatabase extends BaseDB {

    static TABLE_NAME: string = 'friend_labook';

    public async AddFriend(User: string, Friend: string): Promise<void> {
        await this.getConnection()
            .insert({
                User,
                Friend
            }).into(FriendDatabase.TABLE_NAME)
    }

    public async RemoveFriend(User: string, Friend: string): Promise<void> {
        await this.getConnection()
            .delete()
            .from(FriendDatabase.TABLE_NAME)
            .where({
                User: User,
                Friend: Friend
            })
    }
}