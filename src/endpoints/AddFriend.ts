import { Request, Response} from 'express';
import Authenticator from '../services/Authenticator';
import FriendDataBase from '../database/FriendDatabase';

export const AddFriend = async(req: Request, res: Response) => {
    try{
        const token = req.headers.authorization as string;
        const friend_id = req.body.userToFollowId;

        if(!friend_id){
            throw new Error('Missing Parameter ' + friend_id);
        }

        const authData = Authenticator.getTokenData(token);

        const followDataBase = new FriendDataBase();
        await followDataBase.AddFriend(authData.id, friend_id);

        res.status(200).send({
            message: "Friend added",
            token
        })


    }catch (e) {
        res.status(400).send({
            message: e.message
        })
    }
}