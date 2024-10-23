'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { Input } from '@/src/common/components/Input/Input'
import BasicCenterModal from '@/src/common/components/Modal/BasicCenterModal'
import { CreateCommonBadge_T } from '@/src/common/types/commonBadge'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

type Props = {
  setIsOpen: (state: boolean) => void
}

export default function NewBadgeModal({ setIsOpen }: Props) {
  const { register, handleSubmit, reset } = useForm<CreateCommonBadge_T>()

  const queryClient = useQueryClient()

  const { mutate: addBadge } = useMutation({
    mutationFn: async (data: CreateCommonBadge_T) => await axiosWithAuth.post('/admin/badge', data),
    onSuccess: (variables) => {
      console.log(variables)
      window.alert(JSON.stringify(variables.data.name) + '뱃지가 추가되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['admin', 'badge'] })
    },
    onError: (error) => {
      window.alert('뱃지 추가에 실패했습니다.')
      console.error(error)
    },
  })

  const onSubmit = handleSubmit((data) => {
    addBadge(data)
    reset()
  })

  return (
    <BasicCenterModal setIsOpen={setIsOpen}>
      <form
        className="flex max-h-[80vh] w-[80vw] flex-wrap overflow-y-auto rounded-lg bg-white p-4 shadow-popupBox"
        onSubmit={onSubmit}
      >
        <Input title="뱃지 이름" placeholder="한경대학교" {...register('name')} />
        <Input title="이미지 URL" placeholder="www..." {...register('image')} />
        <Input title="뱃지 설명" placeholder="한경대학교 재학생" {...register('description')} />
        <Input title="타입" placeholder="school" {...register('type')} />
        <Input title="이메일" placeholder="@hknu.ac.kr" {...register('email_method')} />
        <Input title="이메일 인증 방법" placeholder="이렇게 인증하면 됩니다." {...register('email_memo')} />
        <Input title="로그인 인증 방법" {...register('login_memo')} />
        <Input title="서류 인증 방법" {...register('file_memo')} />
        <Input title="블록체인 인증 방법" {...register('blockchain_memo')} />
        <button className="blueBtn mt-4" type="submit">
          뱃지 추가하기
        </button>
      </form>
    </BasicCenterModal>
  )
}
