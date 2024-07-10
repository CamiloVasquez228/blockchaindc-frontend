import { TextProps } from 'site/types/Text'

export interface TabProps extends TextProps {
  index: number
  active: number
  handleOpen: (index: number) => void
}
