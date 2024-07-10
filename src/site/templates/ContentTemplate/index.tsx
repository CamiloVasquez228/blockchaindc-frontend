import Subtitle from 'site/components/atoms/Subtitle'
import { ContentTemplateProps } from './ContentTemplate'

const ContentTemplate = ({ children, title }: ContentTemplateProps) => (
  <section className="py-10 max-w-7xl m-auto">
    <Subtitle text={title} className="mb-10" />

    {children}
  </section>
)

export default ContentTemplate
