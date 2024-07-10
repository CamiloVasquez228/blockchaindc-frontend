import { useState } from 'react'
import Tab from 'site/components/atoms/Tab'
import { TabsProps } from 'site/types/Tabs'

const Tabs = ({ items }: TabsProps) => {
  const [active, setActive] = useState<number>(0)

  const handleOpen = (index: number) => {
    setActive(index)
  }

  return (
    <section>
      <div className="border-b">
        {items.map(({ title }, index) => (
          <Tab
            key={title}
            text={title}
            active={active}
            handleOpen={handleOpen}
            index={index}
          />
        ))}
      </div>

      {items.map(({ content, title }, index) => {
        if (active === index)
          return (
            <section key={title} className="p-6">
              {content}
            </section>
          )
      })}
    </section>
  )
}

export default Tabs
