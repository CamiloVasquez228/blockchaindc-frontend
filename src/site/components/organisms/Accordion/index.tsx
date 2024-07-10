import { useState } from 'react'
import { TabsProps } from 'site/types/Tabs'

const Accordion = ({ items }: TabsProps) => {
  const [active, setActive] = useState<number>(0)

  const handleOpen = (index: number) => {
    setActive(index)
  }

  return (
    <section>
      {items.map(({ content, title }, index) => (
        <article
          className={`h-[41px] overflow-hidden ${active === index ? '!h-auto' : ''}`}
          key={title}
        >
          <button
            className="px-5 font-semibold py-2 border-b w-full mb-5"
            onClick={() => handleOpen(index)}
          >
            {title}
          </button>

          {content}
        </article>
      ))}
    </section>
  )
}

export default Accordion
