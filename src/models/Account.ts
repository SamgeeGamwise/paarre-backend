import Accounts from "../database/Accounts";
import Users from "../database/Users";
import Profile from "./Profile";
import User from "./User";

export default class Account {

    public static async getById(id: number) {
        const dbAccount: Accounts | null = await Accounts.findByPk(id, { attributes: ['id', 'isAdmin', 'email'] });
        if (dbAccount) {
            const users: Users[] = await User.getByAccountId(dbAccount.id);
            if (users.length === 2) {
                const user1 = users[0];
                const user2 = users[1];
                const profile = await Profile.getByAccountId(dbAccount.id);
                if (profile !== null) {
                    const account: any = dbAccount.toJSON();
                    account.user1 = user1;
                    account.user2 = user2;
                    account.profile = profile;
                    delete account.password;
                    delete account.lastLogin;
                    delete account.createdAt;
                    delete account.updatedAt;

                    return account;
                } else {
                    return null;
                }
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public static async getByEmail(email: string): Promise<Accounts | null> {
        const account: Accounts | null = await Accounts.findOne({ where: { email }, attributes: ['id', 'isAdmin', 'email', 'password'] });
        return account;
    }

    public static async create(isAdmin: boolean, email: string, password: string): Promise<Accounts | null> {
        const newAccount = await Accounts.create({
            isAdmin,
            email,
            password,
            lastLogin: Date.now(),
        });
        return newAccount;
    }
    public id!: number;
    public isAdmin!: boolean;
    public email!: string;
    public password!: string;
    public profile!: Profile;
    public user1!: User;
    public user2!: User;
    public lastLogin!: Date;
    public updatedAt!: Date;
    public createdAt!: Date;
}
