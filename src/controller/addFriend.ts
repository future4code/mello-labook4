import { Request, Response } from 'express';
import Authenticator from '../services/Authenticator';
import FriendDatabase from '../database/FriendDatabase';

export const addFriend = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const friend_id = req.body.userToFollowId;

        if (!friend_id) {
            throw new Error('Missing Parameter ' + friend_id);
        }

        const authData = Authenticator.getTokenData(token);

        const friendDatabase = new FriendDatabase();
        await friendDatabase.AddFriend(authData.id, friend_id);

        res.status(200).send({
            message: "Friend added"
        })


    } catch (e) {
        res.status(400).send({
            message: e.message
        })
    }
}