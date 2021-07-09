import Interests from "../database/Interests";

export default class Interest {

    public static async getAll(): Promise<Interests[]> {
        const interests = await Interests.findAll({ where: { profileId: 1 } });
        return interests;
    }

    public static async getAllByProfile(id: number) {
        const interests = await Interests.findAll({ where: { profileId: id } });
        return interests;
    }

    public name!: string;
    public category!: string;
    public type!: string;
}
