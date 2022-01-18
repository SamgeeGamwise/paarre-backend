import express from "express"

export default function configExpress(app: express.Application) {
   app.use(express.json())
   app.use(express.urlencoded({ extended: false }))
}
