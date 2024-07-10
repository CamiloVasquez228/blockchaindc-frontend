import { TextProps } from 'site/types/Text'
import { twMerge } from 'tailwind-merge'

const Subtitle = ({ text, className }: TextProps) => (
  <h2 className={twMerge('text-lg font-semibold text-center', className)}>
    {text}
  </h2>
)

export default Subtitle
