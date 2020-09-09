import BaseDatabase from './BaseDatabase';
import { User } from '../models/User';

export default class UserDB extends BaseDatabase {
    private static TABLE_NAME: string = 'user_labook';

    public async createUser(user: User): Promise<void> {
        await this.getConnection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            }).into(UserDB.TABLE_NAME)
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await this.getConnection()
            .select('*')
            .from(UserDB.TABLE_NAME)
            .where({
                email
            });

        return result[0];
    }

    public async getUserById(id: string): Promise<any> {
        const result = await this.getConnection()
            .select('*')
            .from(UserDB.TABLE_NAME)
            .where({
                id
            });

        return result[0];
    }
}