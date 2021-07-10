import Interests from "../database/Interests";

export default class Interest {

    public static async getAll(): Promise<object[]> {
        const dbInterests = await Interests.findAll({
            where: { profileId: 1 },
            attributes: ["name", "category", "type"],
        });
        const interests = dbInterests.map((interest) => {
            return interest.toJSON();
        });
        return interests;
    }

    public static async getAllByProfile(id: number) {
        const dbInterests = await Interests.findAll({
            where: { profileId: id },
            attributes: ["name", "category", "type"],
        });
        const interests = dbInterests.map((interest) => {
            return interest.toJSON();
        });
        return interests;
    }

    public name!: string;
    public category!: string;
    public type!: string;
}
