'use client'

import { editPost, uploadPost } from '@/src/common/api/post'
import BasicCenterModal from '@/src/common/components/Modal/BasicCenterModal'
import { BundleImage, useContentImage } from '@/src/common/hooks/useContentImage'
import { Post_T, PostUpload_T } from '@/src/common/types/post'
import NextImg from '@/src/common/utils/NextImg'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { forwardRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaXmark } from 'react-icons/fa6'
import { PiImagesThin } from 'react-icons/pi'

type Props = {
  isEdit?: boolean // 수정 글 작성인지
  post?: Post_T // 수정할 글 정보
  setIsOpen: (state: boolean) => void
}

export default function EditModal({ isEdit = false, post, setIsOpen }: Props) {
  const [rowsNum, setRowsNum] = useState<number>(2)
  const { register, handleSubmit, reset } = useForm()
  const owner_user_seq = usePathname().slice(1)
  const queryClient = useQueryClient()

  //   수정모드인데 post 정보 없으면 경고창 띄우고 모달 닫기
  if (isEdit && (!post || !post.id)) {
    alert('게시글 정보가 없습니다.')
    setIsOpen(false)
  }

  // 수정이면서 post에 이미지가 있으면 이미지 배열을 전달
  const { imgBundles, contentInputRef, uploadImage, removeImage, removeAllimg } = useContentImage(
    isEdit && post?.hasOwnProperty('image') ? [...post.image] : [],
  )

  const { mutate } = useMutation({
    mutationFn: async (newPost: PostUpload_T) => {
      if (isEdit && post) return await editPost(owner_user_seq, post.id, newPost)
      else return await uploadPost(owner_user_seq, newPost)
    },

    onSuccess: () => {
      window.alert('게시글이 성공적으로 등록되었습니다.')
      removeAllimg()
      reset()
      setRowsNum(2)
      setIsOpen(false)

      queryClient.invalidateQueries({
        queryKey: ['refreshWithPost'],
      })
    },
  })

  const onSubmit = handleSubmit((data) => {
    const { description, isPublic } = data

    if (!description) return alert('내용을 입력해주세요.')

    let isImgUploading = false
    const imgs = []

    for (const img of imgBundles) {
      if (!img?.s3Url && img.s3Url === '') {
        isImgUploading = true
        break
      }
      imgs.push(img.s3Url)
    }

    if (isImgUploading) return alert('이미지 업로드 중입니다. 잠시만 기다려주세요.')

    const postData: PostUpload_T = {
      description,
      image: imgs,
      isPublic: isPublic === 'true' ? true : false,
    }

    mutate(postData)
  })

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value
    const rows = text.split('\n').length + 1

    setRowsNum(rows)
  }

  return (
    <BasicCenterModal setIsOpen={setIsOpen}>
      <form className="w-[468px] rounded-lg bg-white p-4 shadow-popupBox" onSubmit={onSubmit}>
        <h1 className="kr-bold-16 mb-3">게시글 등록</h1>
        <InputTextArea
          isEdit={isEdit}
          description={post?.description ?? ''}
          register={register}
          rowsNum={rowsNum}
          onChange={handleTextAreaChange}
        />
        {imgBundles?.length > 0 && <ImageViewer imgBundles={imgBundles} removeImage={removeImage} />}
        <div className="my-4 flex items-center gap-1">
          <ImgVideoBtn handleUploadImage={uploadImage} ref={contentInputRef} />
          <SelectPublic register={register} isEdit={isEdit} isPublic={Boolean(post?.isPublic).toString()} />
        </div>
        <button
          type="submit"
          className="btn w-full rounded-[5px] bg-blue-primary text-white hover:bg-blue-primaryHover"
        >
          게시
        </button>
      </form>
    </BasicCenterModal>
  )
}

type InputTextAreaProps = {
  isEdit: boolean
  description: string
  register: any
  rowsNum: number
  onChange: any
}

const InputTextArea = ({ isEdit, description, register, rowsNum, onChange }: InputTextAreaProps) => {
  return (
    <div className="flex w-full items-center gap-4">
      <div className="flex-1 rounded-lg bg-gray-100">
        <textarea
          id="text"
          {...register('description')}
          placeholder="여기서 글을 작성하세요"
          rows={rowsNum}
          defaultValue={isEdit ? description : ''}
          onChange={onChange}
          className="w-full resize-none p-3"
        />
      </div>
    </div>
  )
}

type ImageViewerProps = {
  imgBundles: BundleImage[]
  removeImage: (url: string) => void
}

const ImageViewer = ({ imgBundles, removeImage }: ImageViewerProps) => {
  return (
    <div className="border-1 mt-4 flex flex-wrap rounded-[5px] border border-solid border-[#CED0D4] bg-white">
      {imgBundles.map((imgBundle, i) => {
        const tmpUrl = imgBundle.tmpUrl
        const isUploadEnd = !!imgBundle.s3Url

        if (!tmpUrl) return null

        return (
          <div className="relative m-2 mr-0" key={imgBundle.title}>
            <div key={tmpUrl} className="h-[70px] w-[70px] overflow-hidden rounded-[15px]">
              <NextImg src={tmpUrl} alt="content image" />
            </div>
            <div className="absolute right-[-8px] top-[-8px] rounded-full bg-white p-[3px]">
              {!isUploadEnd ? (
                <div>
                  <Ring2 />
                </div>
              ) : (
                <button
                  type="button"
                  className="flex h-fit w-fit items-center justify-center rounded-full bg-gray-300 p-[2px] text-white hover:bg-gray-900"
                  onClick={() => removeImage(tmpUrl)}
                >
                  <FaXmark />
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

interface ImgVideoBtnProps {
  handleUploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ImgVideoBtn = forwardRef<HTMLInputElement, ImgVideoBtnProps>(({ handleUploadImage }, ref) => {
  return (
    <button
      type="button"
      className="btn w-full space-x-1 bg-gray-300 hover:bg-slate-300"
      onClick={() => {
        if (ref && typeof ref !== 'function') ref?.current?.click()
      }}
    >
      <div className="mt-[-2px] h-[20px] w-[20px]">
        <PiImagesThin style={{ width: '100%', height: '100%' }} />
      </div>
      <span className="w-fit">이미지 / 동영상 추가</span>
      <input
        type="file"
        className="hidden"
        multiple
        accept="image/png, image/jpeg, image/jpg"
        ref={ref}
        onChange={handleUploadImage}
      />
    </button>
  )
})

const SelectPublic = ({ register, isEdit, isPublic }: { register: any; isEdit: boolean; isPublic: string }) => {
  return (
    <div className="btn h-full w-fit bg-gray-300">
      <select className="block h-full" {...register('isPublic')} defaultValue={isEdit ? isPublic : 'true'} required>
        <option value="true">🌎 전체 공개</option>
        <option value="false">🔒 나만 보기</option>
      </select>
    </div>
  )
}

const Ring2 = () => {
  return (
    <div className="relative h-5 w-5">
      <svg className="animate-spin" viewBox="0 0 40 40" height="20" width="20">
        <circle
          className="stroke-current opacity-10"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5"
          fill="none"
        />
        <circle
          className="stroke-current"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth="5"
          fill="none"
          strokeDasharray="25 75"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
