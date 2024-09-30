import { Router } from "express"
import { postDelete, postIndex, postStore,postShow, } from "../controllers/post-controller.js"
import jwtAuth from "../middlewares/jwt-auth.js"

const router = Router()

router.post("/", jwtAuth, postStore)
router.delete("/:id", jwtAuth, postDelete)
router.get("/posts", jwtAuth, postIndex)
router.get("/:id", jwtAuth, postShow)

export default router