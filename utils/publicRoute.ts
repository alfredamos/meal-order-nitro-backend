const publicRoutes = ['/api/auth/login', '/api/auth/signup', '/api/pizzas'];

export const isPublicRoutes = (route) => {

  return publicRoutes.includes(route)
}
