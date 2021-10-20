import { body } from "express-validator";
import { validate } from "../validate/validate";

export const vLogin = [
   body("email").isEmail().trim(),
   body("password").isLength({ min: 5, max: 50 }).trim(),
];

export const vRegister = [
   body("firstName1").trim().isLength({ min: 2, max: 50 }),
   body("lastName1").trim().isLength({ min: 2, max: 50 }),
   body("firstName2").trim().isLength({ min: 2, max: 50 }),
   body("lastName2").trim().isLength({ min: 2, max: 50 }),
   body("email").isEmail().normalizeEmail(),
];

export default validate;
