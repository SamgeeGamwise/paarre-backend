import bCrypt from "bcrypt-nodejs"

export default function generateHash(password: string) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8))
}
