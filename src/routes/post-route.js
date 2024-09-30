import { Router } from "express"
import { postDelete, postIndex, postStore,postShow, } from "../controllers/post-controller.js"
import jwtAuth from "../middlewares/jwt-auth.js"

const router = Router()
router.use(jwtAuth)
router.post("/", postStore)
router.delete("/:id", postDelete)
router.get("/posts", postIndex)
router.get("/:id", postShow)

export default router