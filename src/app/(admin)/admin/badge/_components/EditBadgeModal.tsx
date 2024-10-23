'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { Input } from '@/src/common/components/Input/Input'
import BasicCenterModal from '@/src/common/components/Modal/BasicCenterModal'
import { CommonBadge_T } from '@/src/common/types/commonBadge'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

type Props = {
  setIsOpen: (state: boolean) => void
  badge: CommonBadge_T
}

export default function EditBadgeModal({ setIsOpen, badge }: Props) {
  const { register, handleSubmit, reset } = useForm<CommonBadge_T>({
    defaultValues: badge,
  })

  const queryClient = useQueryClient()

  const { mutate: editBadge } = useMutation({
    mutationFn: async (data: CommonBadge_T) =>
      await axiosWithAuth.patch(`/admin/badge/${badge.bdg_id}`, {
        name: data.name,
        image: data.image,
        description: data.memo,
        type: data.type ?? '',
        email_method: data.auth.email?.method ?? '',
        email_memo: data.auth.email?.memo ?? '',
        login_memo: data.auth.login?.memo ?? '',
        file_memo: data.auth.file?.memo ?? '',
        blockchain_memo: data.auth.blockchain?.memo ?? '',
      }),
    onSuccess: (variables) => {
      console.log(variables)
      window.alert(JSON.stringify(variables.data.name) + '뱃지가 수정되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['admin', 'badge'] })
    },
    onError: (error) => {
      window.alert('뱃지 추가에 실패했습니다.')
      console.error(error)
    },
  })

  const { mutate: deleteBadgeReq } = useMutation({
    mutationFn: async (id: number) => await axiosWithAuth.delete(`/admin/badge/${id}`),
    onSuccess: (variables) => {
      window.alert(name + '뱃지가 삭제되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['admin', 'badge'] })
    },
  })

  function deleteBadge(id: number) {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteBadgeReq(id)
    }
  }

  const onSubmit = handleSubmit((data) => {
    editBadge(data)
    reset()
    setIsOpen(false)
  })

  return (
    <BasicCenterModal setIsOpen={setIsOpen}>
      <form
        className="flex max-h-[80vh] w-[80vw] flex-wrap overflow-y-auto rounded-lg bg-white p-4 shadow-popupBox"
        onSubmit={onSubmit}
      >
        <Input title="뱃지 이름" placeholder="한경대학교" {...register('name')} />
        <Input title="이미지 URL" placeholder="www..." {...register('image')} />
        <Input title="뱃지 타입" placeholder="school" {...register('type')} />
        <Input title="회원 수" placeholder="100" {...register('member_count')} />
        <Input title="팔로잉 회원 수" placeholder="100" {...register('followingCount')} />
        <Input title="뱃지 설명" placeholder="한경대학교 재학생" {...register('memo')} />
        <Input title="이메일 인증 주소" placeholder="@hknu.ac.kr" {...register('auth.email.method')} />
        <Input title="이메일 인증 방법" placeholder="이렇게 인증하면 됩니다." {...register('auth.email.memo')} />
        <Input title="로그인 인증 방법" {...register('auth.login.memo')} />
        <Input title="서류 인증 방법" {...register('auth.file.memo')} />
        <Input title="블록체인 인증 방법" {...register('auth.blockchain.memo')} />

        <div className="my-4 flex gap-4">
          <button className="blueBtn" type="submit">
            뱃지 수정하기
          </button>
          <button className="blueBtn" type="button" onClick={() => deleteBadge(badge.bdg_id)}>
            뱃지 삭제하기
          </button>
        </div>
      </form>
    </BasicCenterModal>
  )
}
