import { TextProps } from 'site/types/Text'

const Title = ({ text }: TextProps) => (
  <h1 className="text-center text-xl font-semibold">{text}</h1>
)

export default Title
