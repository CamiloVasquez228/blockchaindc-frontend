import { Link } from 'react-router-dom'
import Subtitle from 'site/components/atoms/Subtitle'
import { twMerge } from 'tailwind-merge'
import { CardProps } from './Card'

const Card = ({ text, linkTo, className, children }: CardProps) => (
  <div
    className={twMerge(
      'shadow-md max-w-72 w-8/12 aspect-video rounded-lg border relative',
      className,
    )}
  >
    {linkTo && (
      <Link
        to={linkTo}
        className="absolute top-0 left-0 w-full flexCenter h-full"
      >
        {text && <Subtitle text={text} />}
      </Link>
    )}

    {children}
  </div>
)

export default Card
