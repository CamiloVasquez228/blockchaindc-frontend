import ListItem from 'site/components/atoms/ListItem'
import { ListProps } from './List'

const List = ({ items }: ListProps) => (
  <ul className="p-5 flex flex-col gap-1">
    {items.map(({ text, title }) => (
      <ListItem key={title} text={text} title={title} />
    ))}
  </ul>
)

export default List
