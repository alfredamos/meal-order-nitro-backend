import { isPublicRoutes } from "~~/utils/publicRoute";
import { useAuth } from "~~/utils/useAuth"

export default defineEventHandler(async(event) => {
  console.log("In auth-middleware")
  const {getAuth} = useAuth();

  //----> Check for jwt
  getAuth(event._path)
  
})