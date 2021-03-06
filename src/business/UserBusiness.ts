import { signupInputDTO, User } from "../models/User";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import UserDB from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import { Post } from "../models/Post";
import { FeedDatabase } from "../database/FeedDatabase";

export class UserBusines {
    static async signup(input: signupInputDTO): Promise<string> {
        const { name, email, password } = input

        if (!name || !email || !password) {
            throw new Error(`Missing one or more required fields: name, email and password.`)
        }
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const id = IdGenerator.generate()

        const user = new User(id, name, email, hashPassword)
        const userDB = new UserDB
        await userDB.createUser(user)

        const token = Authenticator.generateToken({ id })
        return token
    }
    static async login() {

    }

    static async getFeed(token: string | undefined): Promise<Post[]> {
        if (!token) {
            throw new Error(`Unauthorized: please login or signup`)
        }

        const { id: userId } = Authenticator.getTokenData(token);

        const userDB = new UserDB();
        const user = await userDB.getUserById(userId);

        if (!user) {
            throw new Error(`Unauthorized: please login or signup`)
        }

        const feed = await new FeedDatabase().getFeed(userId);
        return feed;
    }
}