import { ButtonHTMLAttributes } from 'react'

const Button = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="bg-black text-white rounded py-2 hover:bg-gray-950"
  />
)

export default Button
