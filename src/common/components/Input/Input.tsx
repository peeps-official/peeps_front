'use client'

import { ErrorMessage } from '@hookform/error-message'
import { forwardRef, InputHTMLAttributes, MouseEvent } from 'react'
import { FieldErrors, ValidateResult } from 'react-hook-form'
import { OwnerEducation_T } from '../../types/owner'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // [ 라벨 값 ]
  title: string

  // [ input type ]
  type?: string
  requiredStar?: boolean
  disabled?: boolean

  // [react-hook-form] 관련
  errors?: FieldErrors<OwnerEducation_T>
  props?: {
    name: any // register로 들어오는 값들
    value: any
  }
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, disabled, type = 'text', requiredStar = false, children, errors, ...props }, ref) => {
    return (
      <div className="mt-[20px] w-full">
        <p className={`kr-bold-12 mb-[5px] h-[20px] ${requiredStar && `after:ml-1 after:content-['*']`}`}>{title}</p>

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
        {errors && (
          <ErrorMessage
            errors={errors}
            name={props.name as any}
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => <ErrorForm key={type} message={message} />)
                : null
            }}
          />
        )}
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

export function ErrorForm({ message }: { message: ValidateResult }) {
  if (!message) return null
  return <div className={`mt-3 text-[#bf1650]`}>⚠️ {message}</div>
}
