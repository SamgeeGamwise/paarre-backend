import Interests from "../database/Interests"

export default class Interest {

    public static async getAll(): Promise<object[]> {
        let interests: any[] = []
        try {
            const dbInterests = await Interests.findAll({
                where: { profileId: 1 },
                attributes: ["name", "category", "type"],
            })
            interests = dbInterests.map((interest) => {
                return interest.toJSON()
            })
        } catch (err) {
            console.log(err)
            return []
        }
        return interests
    }

    public static async getAllByProfile(id: number) {
        const dbInterests = await Interests.findAll({
            where: { profileId: id },
            attributes: ["name", "category", "type"],
        })
        const interests = dbInterests.map((interest) => {
            return interest.toJSON()
        })
        return interests
    }

    public name!: string
    public category!: string
    public type!: string
}
