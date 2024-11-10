import React from 'react'
import Image from 'next/image'
import { FiUpload, FiTrash2 } from 'react-icons/fi'
import BasicCenterModal from '@/src/common/components/Modal/BasicCenterModal'
import LoadingSpinner from '@/src/app/_styles/animation/LoadingSpinner'

interface ImageUploadModalProps {
  src: string | null
  isLoading: boolean
  inputRef: React.RefObject<HTMLInputElement>
  uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void
  setIsOpen: (state: boolean) => void
  onDelete: () => void
  onSubmit: () => void
}

export default function ImageUploadModal({
  setIsOpen,
  src,
  isLoading,
  inputRef,
  uploadImage,
  onDelete,
  onSubmit,
}: ImageUploadModalProps) {
  return (
    <BasicCenterModal setIsOpen={setIsOpen}>
      <div className="max-h-[80vh] min-h-[30vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">이미지 설정</h2>

        <div className="mb-6 flex space-x-4">
          <label
            htmlFor="image-upload"
            className="flex cursor-pointer items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-blue-600"
          >
            <FiUpload className="mr-2" />
            이미지 업로드
          </label>
          <input
            ref={inputRef}
            type="file"
            id="image-upload"
            accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
            onChange={uploadImage}
            className="hidden"
          />
          <button
            onClick={onDelete}
            className="flex items-center justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:bg-gray-300"
          >
            <FiTrash2 className="mr-2" />
            기본 이미지로 변경
          </button>
        </div>

        <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
          {src ? (
            <div className="relative aspect-video w-full">
              <Image src={src} alt="Preview" width={500} height={300} layout="responsive" objectFit="cover" />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
                  <LoadingSpinner />
                </div>
              )}
            </div>
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-gray-100 p-4 text-center">
              <p className="text-sm text-gray-400">이미지를 선택해주세요.</p>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:bg-gray-200"
          >
            취소
          </button>
          <button
            onClick={onSubmit}
            disabled={isLoading}
            className={`rounded-md px-4 py-2 text-sm font-medium text-white transition duration-300 ${
              !isLoading ? 'bg-blue-500 hover:bg-blue-600' : 'cursor-not-allowed bg-blue-300'
            }`}
          >
            {isLoading ? <LoadingSpinner /> : '적용'}
          </button>
        </div>
      </div>
    </BasicCenterModal>
  )
}
