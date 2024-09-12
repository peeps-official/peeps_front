import { ChangeEvent, useRef, useState } from 'react'

const MAX_FILE_SIZE = 5 * 1024 * 1024

export const useContentImage = (imageUrl: string[] = []) => {
  const [contentImage, setContentImage] = useState([...imageUrl])

  const contentInputRef = useRef<HTMLInputElement | null>(null)

  const removeImage = (url: string) => {
    setContentImage((prev) => prev.filter((item) => item !== url))

    if (contentInputRef.current) contentInputRef.current.value = ''
  }

  const handleUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (!files) return

    event.target.setCustomValidity('')

    Array.from(files).forEach((file) => {
      if (!file || typeof file !== 'object') return

      //사진 용량 확인
      if (file.size > MAX_FILE_SIZE) {
        event.target.setCustomValidity('사진의 용량은 5MB 이하만 가능합니다.')
        event.target.reportValidity()
        return
      }

      //파일의 url을 가지고 오는 방법

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        const data = reader.result?.toString() ?? ''
        setContentImage((prev) => [...prev, data])
      }
    })
  }

  return { imageUrls: contentImage, contentInputRef, removeImage, handleUploadImage }
}
