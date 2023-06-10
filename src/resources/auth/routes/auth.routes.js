import { Router} from "express";

const autRoutes = Router()
const baseURI = "/auth"

autRoutes.post(`${baseURI}/login`)
autRoutes.post(`${baseURI}/signup`)

export default autRoutes