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
    id: "ADMIN",
    name: "Tomas",
    surname: "Avendaño",
}  
const token = jwt.sign(payload, TOKEN_SECRET, {
    expiresIn: 10,
    algorithm: "HS512"
})
return res.status(200).json({token})  
}

export const signup = async ( req, res ) => {
    const body = req.body
    const user = new UserModel( body )
    user.hashPassword( body.password )
    const [ userSaved, error ] = await awaitCatcher( user.save() )
    if ( !userSaved || error ) {
      console.error( error )
      return res.status( 400 ).json( { status: "error", msg: "no se pudo registrar al usuario" } )
    }
    return res.status( 201 ).json( { status: "ok", msg: "usuario registrado correctamente" } )
  }
