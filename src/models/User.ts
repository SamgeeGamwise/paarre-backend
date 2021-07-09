import bcrypt from "bcrypt-nodejs";
import logger from "npmlog";
import generateHash from "../database/passport/hash";
import Users from "../database/Users";

export default class User {

    public static async create(firstName: string, lastName: string, accountId: number) {
        const users: Users | null = await Users.create({
            firstName,
            lastName,
            accountId,
        });

        return users;
    }
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public password?: string;
}
