import { Router } from "express"
import { postStore, postDelete, postIndex, postShow } from "../controllers/post-controller"
import jwtAuth from "../middlewares/jwt-auth"

const router = Router()

router.post("/", jwtAuth, postStore)
router.delete("/:id", jwtAuth, postDelete)
router.get("/", jwtAuth, postIndex)
router.get("/:id", jwtAuth, postShow)

export default router