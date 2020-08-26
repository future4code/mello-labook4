import BaseDB from './BaseDatabase';

export default class FriendDataBase extends BaseDB{

    static TABLE_NAME: string = 'Follow_Cookenu';

    public async AddFriend (User: string, Friend: string) :Promise<void>{
        await this.getConnection()
        .insert({
            User,
            Friend
        }).into(FriendDataBase.TABLE_NAME)
    }

    public async RemoveFriend (User: string, Friend: string) :Promise<void>{
        await this.getConnection()
            .delete()
            .from(FriendDataBase.TABLE_NAME)
            .where({
            User: User,
            Friend: Friend
        })
    }
}