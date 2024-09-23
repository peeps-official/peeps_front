'use client'

import { forwardRef, InputHTMLAttributes, MouseEvent } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  type?: string
  disabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, disabled, type = 'text', children, ...props }, ref) => {
    return (
      <div className="mt-[20px] w-full">
        <p className="kr-bold-12 mb-[5px] h-[20px]">{title}</p>

        <div
          className={`flex justify-between rounded-8xs border-[1px] border-solid border-whitesmoke-300 px-4 py-2 ${disabled && 'bg-[#E0E2E7]'}`}
        >
          <input
            className="relative flex h-[34px] flex-1 items-center bg-[transparent] p-0 text-left text-base font-medium leading-[34px] tracking-[-0.01em] [border:none] [outline:none]"
            ref={ref}
            disabled={disabled}
            type={type}
            {...props}
          />
          {children}
        </div>
      </div>
    )
  },
)

type InputBtnProps = {
  title: string
  disabled: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void> | void
}

export function InputBtn({ disabled, onClick, title }: InputBtnProps) {
  return (
    <button className={`blueBtn`} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  )
}
