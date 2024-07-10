import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthenticatedRoutes from './authenticated'
import UnauthenticatedRoutes from './unauthenticated'

const Routes = () => {
  const isAuthenticated = false

  return (
    <RouterProvider
      router={createBrowserRouter(
        isAuthenticated ? AuthenticatedRoutes : UnauthenticatedRoutes,
      )}
    />
  )
}

export default Routes
