import { InputHTMLAttributes } from 'react'

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className="w-full h-12 border outline-0	rounded px-3" />
)

export default Input
