import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import SuspenseWrapper from 'site/components/organisms/SuspenseWrapper'
import PartTwo from 'site/pages/PartTwo'
import MainTemplate from 'site/templates/MainTemplate'

const Home = lazy(() => import('../../pages/Home'))
const PartOne = lazy(() => import('../../pages/PartOne'))
const Film = lazy(() => import('../../pages/Film'))

const UnauthenticatedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <Home />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'parte-1',
        element: (
          <SuspenseWrapper>
            <PartOne />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'parte-1/film/:id',
        element: (
          <SuspenseWrapper>
            <Film />
          </SuspenseWrapper>
        ),
      },
      {
        path: 'parte-2',
        element: (
          <SuspenseWrapper>
            <PartTwo />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]

export default UnauthenticatedRoutes
