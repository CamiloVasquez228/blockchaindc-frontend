import { TabProps } from './Tab'

const Tab = ({ text, active, handleOpen, index }: TabProps) => (
  <button
    className={`px-8 py-2 font-semibold rounded-t-lg -mb-0.5 bg-white border-b ${active === index ? 'border border-b-0' : ''}`}
    onClick={() => handleOpen(index)}
  >
    {text}
  </button>
)

export default Tab
