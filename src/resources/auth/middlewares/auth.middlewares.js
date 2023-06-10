import jwt from "jsonwebtoken"
import environment from "../../../config/environment.js"
const { TOKEN_SECRET } = environment

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["autorizacion"]
    if (!authHeader) {
        return res.status(401).json({ status: "error", msg: "header no presente" })
    }
    const token = authHeader.split(" ")[1]
    if (!token) return res.status(401).json({ status: "error", msg: "token no presente" })
    try {
        const payload = jwt.verify(token, TOKEN_SECRET) //tambien esta el comando decode que no sirve
        req.user = payload
        next()
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ status: "error", msg: "token expiró" })
        } else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ status: "error", msg: "token invalido" })
        } else {
            return res.status(401).json({ status: "error", msg: "error.message" })
        }
    }
}