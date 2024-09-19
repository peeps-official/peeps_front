import { ChangeEvent, useRef, useState } from 'react'

const MAX_FILE_SIZE = 5 * 1024 * 1024

/**
 * @description 이미지 업로드 커스텀 훅
 * @param imageUrl 초기 이미지 url
 * @returns {files, imageUrls, contentInputRef, removeImage, handleUploadImage}
 * files: 파일 객체
 * imageUrls: 이미지 url
 * contentInputRef: input ref
 * removeImage: 이미지 삭제 함수
 * handleUploadImage: 이미지 업로드 함수 - input change 이벤트 핸들러
 */

export const useContentImage = (imageUrl: string[] = []) => {
  const [files, setFiles] = useState<FileList | null>(null)
  const [imageUrls, setImageUrls] = useState([...imageUrl])

  const contentInputRef = useRef<HTMLInputElement | null>(null)

  const removeImage = (url: string) => {
    setImageUrls((prevUrls) => {
      // 제거할 이미지의 인덱스 찾기
      const index = prevUrls.indexOf(url)
      if (index === -1) return prevUrls

      // 이미지 URL 제거
      const newImageUrls = prevUrls.filter((item) => item !== url)

      // 파일 제거
      if (files) {
        const filesArray = Array.from(files)
        filesArray.splice(index, 1)

        // DataTransfer를 사용하여 새로운 FileList 생성
        const dataTransfer = new DataTransfer()
        filesArray.forEach((file) => {
          dataTransfer.items.add(file)
        })

        // files 상태 업데이트
        setFiles(dataTransfer.files)
      }

      return newImageUrls
    })

    // 파일 입력 값 초기화 (선택 사항)
    if (contentInputRef.current) contentInputRef.current.value = ''
  }

  const removeAllimg = () => {
    // 이미지 URL과 파일 상태 초기화
    setImageUrls([])
    setFiles(null)
  }

  const handleUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files: newFiles } = event.target
    if (!newFiles) return

    event.target.setCustomValidity('')

    // 기존 파일들과 새로운 파일들을 배열로 변환하여 병합
    const existingFiles = files ? Array.from(files) : []
    const newFilesArray = Array.from(newFiles)
    const updatedFilesArray = existingFiles.concat(newFilesArray)

    // DataTransfer를 사용하여 새로운 FileList 생성
    const dataTransfer = new DataTransfer()
    updatedFilesArray.forEach((file) => {
      dataTransfer.items.add(file)
    })

    // files 상태 업데이트
    setFiles(dataTransfer.files)

    // 이미지 URL 업데이트
    newFilesArray.forEach((file) => {
      if (!file || typeof file !== 'object') return

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
        setImageUrls((prev) => [...prev, data])
      }
    })

    // 파일 입력 값 초기화 (선택 사항)
    if (contentInputRef.current) contentInputRef.current.value = ''
  }

  return { files, imageUrls, contentInputRef, removeImage, handleUploadImage, removeAllimg }
}
