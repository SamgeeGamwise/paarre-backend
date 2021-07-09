import Accounts from "../database/Accounts";

export default class Account {

    public static async getById(id: number): Promise<Accounts | null> {
        const account: Accounts | null = await Accounts.findByPk(id);
        return account;
    }

    public static async getByEmail(email: string): Promise<Accounts | null> {
        const account: Accounts | null = await Accounts.findOne({ where: { email } });
        return account;
    }

    public static async create(isAdmin: boolean, email: string, password: string) {
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
    public lastLogin!: Date;
    public updatedAt!: Date;
    public createdAt!: Date;
}
