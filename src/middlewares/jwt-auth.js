import jwtService from "../services/jwt-service.js";

const jwtAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = req.user = jwtService.verifyAccessToken(token)
    if (user) {
      next();
    } else {
      throw new Error("");
    }
  } catch (error) {
    res.sendStatus(401);
  }
};

export default jwtAuth;