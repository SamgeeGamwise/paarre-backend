import Profiles from "../database/Profiles";
import Interest from "./Interest";

export default class Profile {

    public static async create(id: number): Promise<Profiles | null> {
        const newProfile = await Profiles.create({
            accountId: id,
            details: "",
        });
        return newProfile;
    }

    public static async getByAccountId(id: number) {
        const dbProfile = await Profiles.findOne({ where: { accountId: id } });
        if (dbProfile !== null) {
            const dbInterests = await Interest.getAllByProfile(dbProfile.id);
            const profile: any = dbProfile.toJSON();
            const interests = dbInterests.map((interest) => {
                return interest.toJSON();
            })
            profile.interests = interests;
            return profile;
        } else {
            return null
        }
    }

    public details!: string;
    public interests!: Interest[];
}
