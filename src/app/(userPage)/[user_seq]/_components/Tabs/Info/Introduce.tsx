import { axiosWithAuth } from '@/src/common/api/instance'
import { OwnerProfileStateAtom } from '@/src/common/recoil/ownerAtom'
import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import { OwnerProfile_T } from '@/src/common/types/owner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'

export default function Introduce() {
  const [isEditOpen, setIsEditOpen] = useState(false)

  const isOwner = useRecoilValue<boolean>(IsOwnerAtom)
  const ownerData = useRecoilValue<OwnerProfile_T>(OwnerProfileStateAtom)

  const textRef = useRef<HTMLTextAreaElement>(null)
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async (data: string) => await axiosWithAuth.patch(`${ownerData.user_seq}/info`, { info_detail: data }),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['userData'] })
      window.alert('수정되었습니다.')
      setIsEditOpen(false)
    },
  })

  return (
    <div className="mx-auto w-full rounded-lg p-4 shadow-popupBox">
      <div className="mb-4 flex items-start justify-between">
        <h1 className="kr-bold-14">소개</h1>
        {isOwner && (
          <button
            className="kr-bold-14 text-blue-600"
            onClick={() => {
              if (isEditOpen && textRef?.current) {
                mutate(textRef.current.value)
              } else {
                setIsEditOpen((prev) => !prev)
              }
            }}
          >
            수정
          </button>
        )}
      </div>
      {isEditOpen ? (
        <textarea
          ref={textRef}
          defaultValue={ownerData.info_detail ?? ''}
          placeholder="이곳에 글을 적으실 수 있습니다."
          className="border-1 w-full border-solid border-gray-100"
        />
      ) : (
        <div className="kr-regular-14">{ownerData.info_detail ?? '-'}</div>
      )}
    </div>
  )
}
