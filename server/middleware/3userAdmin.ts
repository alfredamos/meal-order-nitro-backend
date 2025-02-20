import { isAdminRoute } from "~~/utils/adminRoutes";
import { useAuth } from "~~/utils/useAuth";

export default defineEventHandler((event) => {
  console.log("In admin-middleware");
  const {adminUser} = useAuth();
  if(isAdminRoute(event._path)){
     adminUser(event._path);
  }
})