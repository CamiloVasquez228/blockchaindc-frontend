import { ListItemProps } from 'site/types/ListItem'

const ListItem = ({ title, text }: ListItemProps) => (
  <li>
    {title && <b>{title}:</b>} {text}
  </li>
)

export default ListItem
