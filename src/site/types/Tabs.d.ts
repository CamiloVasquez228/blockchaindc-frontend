import { ReactElement } from 'react'

interface Item {
  title: string
  content: ReactElement
}

export interface TabsProps {
  items: Item[]
}
