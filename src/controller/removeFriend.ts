import { Request, Response } from 'express';
import Authenticator from '../services/Authenticator';
import FriendDatabase from '../database/FriendDatabase';

export const removeFriend = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const followed_id = req.body.followedUserId;

        if (!followed_id) {
            throw new Error('Missing Parameter ' + followed_id);
        }

        const authData = Authenticator.getTokenData(token);

        const friendDatabase = new FriendDatabase();
        await friendDatabase.RemoveFriend(authData.id, followed_id);

        res.status(200).send({
            message: "Follow Removed"
        })


    } catch (e) {
        res.status(400).send({
            message: e.message
        })
    }
}