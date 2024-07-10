import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const MainTemplate = lazy(() => import('../../templates/MainTemplate'))

const AuthenticatedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainTemplate />,
  },
]

export default AuthenticatedRoutes
