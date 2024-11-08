'use client'

import { upLoadFileAuth } from '@/src/common/api/userBadge'
import { Input, InputBtn } from '@/src/common/components/Input/Input'
import { useContentImage } from '@/src/common/hooks/useContentImage'
import { fileAtom } from '@/src/common/recoil/authAtom'
import { useEffect, useRef, useState } from 'react'
import { HiOutlineDownload } from 'react-icons/hi'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { Ring2 } from '../../../Post/EditModal'
import AddAuthContainer, { useAddAuth } from '../AddAuthContainer'
import { StepProps } from '../Email/StepInput'

export default function GetFileAuth() {
  const [stepData, setStepData] = useState({
    step: 0,
    data: { email: '' },
  })

  return (
    <AddAuthContainer
      title="서류 인증"
      subTitle="서류를 통해서, 각종 자격을 인증할 수 있어요."
      icon={<HiOutlineDownload />}
    >
      <File stepData={stepData} setStepData={setStepData} />
      {stepData.step === 1 && <AddExplane stepData={stepData} setStepData={setStepData} />}
    </AddAuthContainer>
  )
}

export function File({ stepData, setStepData }: StepProps) {
  const setFile = useSetRecoilState<string | null>(fileAtom)
  const [isUploadEnd, setIsUploadEnd] = useState(false)
  const { imgBundles, contentInputRef, uploadImage, removeImage, removeAllimg } = useContentImage([])

  const disabled = stepData.step >= 1

  useEffect(() => {
    if (imgBundles.length > 0) {
      setStepData({ step: 1, data: { ...stepData.data } })
      if (imgBundles[0].s3Url) {
        setFile(imgBundles[0].s3Url)
        setIsUploadEnd(true)
      }
    }
  }, [imgBundles])

  return (
    <div>
      <Input
        title="파일"
        ref={contentInputRef}
        className="hidden"
        disabled={disabled}
        type="file"
        accept="image/*, .pdf"
        onChange={uploadImage}
      >
        <div className="flex w-full items-center justify-between overflow-hidden pr-2">
          {imgBundles[0] && (
            <>
              <p className="flex-1 truncate">{imgBundles[0].title}</p>
              {!isUploadEnd && (
                <div className="flex-shrink-0">
                  <Ring2 />
                </div>
              )}
            </>
          )}
        </div>
        <InputBtn
          title={`업로드`}
          disabled={disabled}
          onClick={() => {
            contentInputRef.current?.click()
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

export function AddExplane({ stepData, setStepData }: StepProps) {
  const { setIsSpread } = useAddAuth()
  const [file, setFile] = useRecoilState<string | null>(fileAtom)
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
            setStepData({ step: 0, data: {} })
            setIsSpread(false)
          }
        }}
      >
        인증 요청하기
      </button>
    </div>
  )
}
