import to from "await-to-js"
import { Request, Response } from "express"
import Account from "../database/models/Account"
import Profile from "../database/models/Profile"
import User from "../database/models/User"
import generateHash from "./passport/hash"
import { errJson, resJson } from "./transformer"
import StatusCode from "./transformer/StatusCodes"

// async function login(req: Request, res: Response) {
//     const account: any = req.user
//     const [err, dbAccount] = await to(Account.lastLoggedIn(account.id))

//     if (err || !dbAccount) {
//         errJson(res, StatusCode.Issue, "Something went wrong.")
//     } else {
//         resJson(res, StatusCode.OK, "Logged in!")
//     }
// }

// async function register(req: Request, res: Response) {
//     const { firstName1, lastName1, firstName2, lastName2, email, password } = req.body
//     const [err, existingAccount] = await to<Account | null>(Account.getByEmail(email))

//     if (err) {
//         errJson(res, StatusCode.Issue, err.message)
//     } else if (existingAccount) {
//         errJson(res, StatusCode.AlreadyExists, "Email already in use!")
//     } else {
//         const hashPassword = generateHash(password)
//         const [err, newAccount] = await to(Account.new(false, email, hashPassword))

//         if (err || !newAccount) {
//             errJson(res, StatusCode.Issue, "Could not create Account!")
//         } else {

//             const [err1, newUser1] = await to(User.new(firstName1, lastName1, newAccount.id))
//             const [err2, newUser2] = await to(User.new(firstName2, lastName2, newAccount.id))
//             const [err3, newProfile] = await to(Profile.new(newAccount.id))

//             if (err1 || err2 || err3 || !newUser1 || !newUser2 || newProfile) {
//                 newAccount.destroy()
//                 errJson(res, StatusCode.Issue, "Could not create Account!")
//             } else {
//                 res.redirect(StatusCode.Redirect, "login")
//             }
//         }
//     }
// }

// async function logout(req: Request, res: Response) {
//     if (req.session) {
//         req.session.destroy((err) => {
//             if (err) {
//                 errJson(res, StatusCode.Issue, err)
//             } else {
//                 resJson(res, StatusCode.OK, "You have successfully logged out!")
//             }
//         })
//     } else {
//         errJson(res, StatusCode.NotFound, "Session not found!")
//     }
// }

// async function newPassword(req: any, res: Response) {
//     const id: number = req.user
//     const { password }: { password: string } = req.body
//     await Account.update({ password: generateHash(password) }, { where: { id } })
//     resJson(res, StatusCode.OK, "Password Updated!")
// }

// export {
//     login,
//     logout,
//     register,
//     newPassword
// }
