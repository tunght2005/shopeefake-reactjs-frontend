import React from 'react'
import type { UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  className: string
  placeholder: string
  name: string
  register: UseFormRegister<any>
  errorMessage?: string
  autoComplete?: string
}
export default function Input({ type, className, placeholder, name, register, errorMessage, autoComplete }: Props) {
  return (
    <div>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        {...register(name)}
        autoComplete={autoComplete}
      />
      <div className='mt-1 text-red-600 min-h-4 text-sm'>{errorMessage}</div>
    </div>
  )
}
