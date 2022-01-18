import express from "express"

export default function configPath(app: express.Application) {
   app.use(express.static("public"))
}
