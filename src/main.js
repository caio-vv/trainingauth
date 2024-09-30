import express from "express"
import "dotenv/config"
import "./config/db.js"
import userRouter from "./routes/user-route.js"
import postRouter from "./routes/post-route.js"

const app = express()
app.use(express.json())

app.use("/user", userRouter)
app.use("/post", postRouter)