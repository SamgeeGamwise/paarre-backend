import Interests from "../database/Interests";

export default class Interest {

    public static async getAll(): Promise<Interests[]> {
        const interests = await Interests.findAll({ where: { profileId: 1 } });
        return interests;
    }
    private _name?: string;
    private _category?: string;
    private _type?: string;
}
