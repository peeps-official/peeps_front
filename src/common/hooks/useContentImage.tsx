import axios from 'axios'
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const MAX_FILE_SIZE = 5 * 1024 * 1024

/**
 * @description 이미지 업로드 커스텀 훅
 * @param imageUrl 초기 이미지 url
 * @returns {files, imageUrls, contentInputRef, removeImage, handleUploadImage}
 * files: 파일 객체
 * imageUrls: 이미지 url
 * contentInputRef: input ref
 * removeImage: 이미지 삭제 함수
 * uploadImage: 이미지 업로드 함수 - input change 이벤트 핸들러
 */

export type BundleImage = {
  title: string
  tmpUrl: string
  s3Url: string
}

export const useContentImage = (imageUrl: string[] = []) => {
  const [imgBundles, setImgBundles] = useState<BundleImage[]>([])

  const contentInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (imageUrl.length > 0) {
      setImgBundles(
        imageUrl.map((url) => ({
          title: '',
          tmpUrl: url,
          s3Url: url,
        })),
      )
    }
  }, [])

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files: newFiles } = event.target
    if (!newFiles) return

    // 에러 메세지 설정
    event.target.setCustomValidity('')

    // 파일 배열로 변환 (FileList -> Array)
    const fileListAsArray = Array.from(newFiles)

    // 이미지 URL 업데이트
    fileListAsArray.forEach((file) => {
      if (!file || typeof file !== 'object' || !file.name) return

      // 사진 용량 확인
      if (file.size > MAX_FILE_SIZE) {
        event.target.setCustomValidity('사진의 용량은 5MB 이하만 가능합니다.')
        event.target.reportValidity()
        return
      }

      // 파일의 URL 생성 및 이미지 URL 상태 업데이트
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const data = reader.result?.toString() ?? ''
        setImgBundles((prev) => [
          ...prev,
          {
            title: file.name,
            tmpUrl: data,
            s3Url: '',
          },
        ])
      }

      upLoadS3(file, setImgBundles)
    })
  }

  const removeImage = (url: string) => {
    setImgBundles((prev) => {
      const newImageUrls = prev.filter((item) => item.tmpUrl !== url || item.s3Url !== url)
      return newImageUrls
    })

    if (contentInputRef.current) contentInputRef.current.value = ''
  }

  const removeAllimg = () => {
    // 이미지 URL과 파일 상태 초기화
    setImgBundles([])
    if (contentInputRef.current) contentInputRef.current.value = ''
  }

  return { imgBundles, contentInputRef, uploadImage, removeImage, removeAllimg }
}

const upLoadS3 = async (file: File, setImg: Dispatch<SetStateAction<BundleImage[]>>) => {
  const filename = Date.now() + uuidv4()

  const { data, status } = await axios.get('/api/post/image?file=' + filename)

  if (status !== 200) {
    alert('Failed to get signed URL')
    return
  } else {
    const { fields, url } = data

    const formData = new FormData()
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value as string)
    })
    formData.append('file', file)

    const uploadResponse = await axios.post(url, formData)
    if (uploadResponse.statusText === 'No Content') {
      const url = uploadResponse.config.url + '/' + filename
      setImg((prev) => {
        const newImg = prev.map((img) => {
          if (img.title === file.name) {
            return {
              title: img.title,
              tmpUrl: img.tmpUrl,
              s3Url: url,
            }
          }
          return img
        })
        return newImg
      })
    } else {
      console.error('S3 Upload Error:', uploadResponse)
      alert('Upload failed.')
    }
  }
}
