import express from "express"
import config from "./config"

const app: express.Application = express()

config(app)

export default app
