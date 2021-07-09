import Users from "../database/Users";

export default class User {

    public static async create(firstName: string, lastName: string, accountId: number): Promise<Users | null> {
        const users: Users | null = await Users.create({
            firstName,
            lastName,
            accountId,
        });

        return users;
    }

    public static async getByAccountId(id: number) {
        const users: Users[] = await Users.findAll({ where: { accountId: id } });
        return users;
    }


    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
}
