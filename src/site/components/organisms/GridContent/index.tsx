import { GridContentProps } from './GridContent'

const GridContent = ({ children }: GridContentProps) => (
  <article className="grid items-stretch grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
    {children}
  </article>
)

export default GridContent
