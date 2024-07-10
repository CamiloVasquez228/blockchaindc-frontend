import { Suspense } from 'react'
import { SuspenseWrapperProps } from './SuspenseWrapper'

const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => (
  <Suspense fallback={<h1>Cargando...</h1>}>{children}</Suspense>
)

export default SuspenseWrapper
