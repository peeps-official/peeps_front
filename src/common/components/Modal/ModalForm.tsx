'use client'
import NextImg from '@/src/common/utils/NextImg'
import { forwardRef } from 'react'
import { FaCamera } from 'react-icons/fa'

/**
 * @description 모달의 디자인을 통일화하기 위한 컴포넌트입니다.
 * React-Hook-Form과 함께 사용해주세요.
 *
 * @param title 모달의 제목
 * @param setIsOpen 모달을 닫는 함수
 */

type ModalFormProps = {
  title: string
  setIsOpen: (state: boolean) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

export default function ModalForm({ title, setIsOpen, onSubmit, children }: ModalFormProps) {
  return (
    <div
      className="fixed left-0 top-0 z-modal flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={() => {
        setIsOpen(false)
      }}
    >
      <form
        onSubmit={onSubmit}
        onClick={(e) => e.stopPropagation()}
        className="flex h-fit w-fit flex-col items-center justify-center gap-[10px] overflow-y-auto rounded-[10px] bg-white px-[42px] py-[24px]"
      >
        <div className="flex flex-1 items-center justify-between">
          <div className="kr-bold-24 text-center">{title}</div>
        </div>
        {children}
      </form>
    </div>
  )
}

type PictureProps = {
  alt: string
  src: string | null
  isLoading: boolean
  inputRef: React.RefObject<HTMLInputElement>
  uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function ProfileImg({ alt, src, isLoading, inputRef, uploadImage }: PictureProps) {
  function handleSetImgBtn() {
    inputRef.current?.click()
  }

  return (
    <div className="relative h-[120px] w-[120px] rounded-full bg-[white] p-[4px]">
      <div className="relative h-full w-full cursor-pointer overflow-hidden rounded-full object-cover">
        <NextImg alt={alt} src={src ?? '/images/profile/profile.svg'} />
        {isLoading && (
          <div className="absolute left-0 top-0 h-full w-full rounded-full bg-white bg-opacity-40">
            <Ring styles="!absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 " />
          </div>
        )}
      </div>

      <button
        className="absolute bottom-[5px] right-[10px] z-[100] flex h-[36px] w-[36px] items-center justify-center overflow-hidden rounded-full bg-[#E4E6EB] p-[9px] hover:bg-slate-300"
        type="button"
        onClick={handleSetImgBtn}
      >
        <FaCamera className="h-full w-full" />
      </button>
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        accept="image/png, image/jpeg, image/jpg, image/webp"
        onChange={uploadImage}
      />
    </div>
  )
}

import Ring from '@/src/app/_styles/animation/Ring'
import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  id?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ title, id, ...props }, ref) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <label htmlFor={id} className="text-gray-00 mb-2 block text-sm font-bold">
        {title}
      </label>
      <input
        ref={ref}
        {...props}
        placeholder="내용이 없습니다."
        className="w-full rounded-lg border-2 border-gray-300 bg-slate-100 p-2"
      />
    </div>
  )
})

type SendProps = {
  title: string | React.ReactNode
  isLoading?: boolean
}

function Send({ title, isLoading = false }: SendProps) {
  return (
    <button
      type="submit"
      className={`h-8 w-full rounded px-4 py-2 font-bold text-white ${!isLoading ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-300 hover:bg-gray-300'}`}
      disabled={isLoading}
    >
      {title}
    </button>
  )
}

ModalForm.ProfileImg = ProfileImg
ModalForm.Input = Input
ModalForm.Send = Send
