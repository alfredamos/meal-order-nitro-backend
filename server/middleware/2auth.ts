import { useAuth } from "~~/utils/useAuth"

export default defineEventHandler(async(event) => {
  console.log("In auth-middleware")
  const auth = useAuth();

  //----> Check for jwt
  auth.getAuth(event._path)
  
})