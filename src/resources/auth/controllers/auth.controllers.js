import jwt from "jsonwebtoken"
import environment from "../../../config/environment.js"
const {TOKEN_SECRET} = environment

export const login = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password ) {
        return res.status(400).json({status:"error", msg: "El usuario y contraseña no pueden ser vacios"})
    }
// Buscar el usuario en la DB y se verifica si la contraseña es valida
const payload = {
    role: "ADMIN",
    name: "Tomas",
    surname: "Avendaño",
    email: "tavends@outlook.com"
}  
const token = jwt.sign(payload, TOKEN_SECRET, {
    expiresIn: 10,
    algorithm: "HS512"
})
return res.status(200).json({token})  
}
