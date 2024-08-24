'use client'

import { Input, InputBtn } from '@/src/common/components/Input/Input'
import AddAuthContainer, { useAddAuth } from '../AddAuthContainer'
import { HiOutlineDownload } from 'react-icons/hi'
import { ChangeEvent, useRef, useState } from 'react'
import { StepProps } from '../Email/StepInput'
import { useMutation } from '@tanstack/react-query'
import { axiosWithAuth } from '@/src/common/api/instance'
import { upLoadFileAuth } from '@/src/common/api/userBadge'
import { atom, useRecoilState, useRecoilValue } from 'recoil'

export default function GetFileAuth() {
  const [step, setStep] = useState(0)

  return (
    <AddAuthContainer
      title="서류 인증"
      subTitle="서류를 통해서, 각종 자격을 인증할 수 있어요."
      icon={<HiOutlineDownload />}
    >
      <File step={step} setStep={setStep} />
      {step === 1 && <AddExplane step={step} setStep={setStep} />}
    </AddAuthContainer>
  )
}

const fileAtom = atom<File | null>({
  key: 'fileAtom',
  default: null,
})

export function File({ step, setStep }: StepProps) {
  const [file, setFile] = useRecoilState<File | null>(fileAtom)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files ? e.target.files[0] : null

    if (!file) return

    setFile(file)
    setStep(1)
  }

  const disabled = step >= 1

  return (
    <div>
      <Input
        title="파일"
        ref={inputRef}
        className="hidden"
        disabled={disabled}
        type="file"
        accept="image/*, .pdf"
        onChange={handleInputChange}
      >
        <div>{file && file.name}</div>
        <InputBtn
          title="업로드"
          disabled={disabled}
          onClick={() => {
            console.log('클릭')
            inputRef.current?.click()
          }}
        />
      </Input>
      {/* [TODO]
          사진 재업로드 버튼 만들기
          {file && <div>수정하기</div>}
      */}
    </div>
  )
}

export function AddExplane({ step, setStep }: StepProps) {
  const { setIsSpread } = useAddAuth()
  const [file, setFile] = useRecoilState<File | null>(fileAtom)
  const inputRef = useRef<HTMLInputElement>(null)

  const [disabled, setDisabled] = useState(false)

  return (
    <div>
      <Input
        title="추가 설명"
        ref={inputRef}
        disabled={disabled}
        placeholder="서류에 대한 간단한 설명을 입력해주세요."
      ></Input>
      <button
        className="blueBtn mt-[20px] w-full text-center"
        onClick={async () => {
          // 에러처리
          if (!file) return alert('파일을 업로드해주세요.')
          if (!inputRef.current) return alert('ref생성 오류.')

          const des = inputRef.current.value
          setDisabled(true)
          const data = await upLoadFileAuth(file, des)

          if (data) {
            alert('인증이 요청되었습니다!')
            // 초기화
            inputRef.current.value = ''
            setFile(null)
            setStep(0)
            setIsSpread(false)
          }
        }}
      >
        인증 요청하기
      </button>
    </div>
  )
}
