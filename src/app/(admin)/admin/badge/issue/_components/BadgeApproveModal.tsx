'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { Input } from '@/src/common/components/Input/Input'
import BasicCenterModal from '@/src/common/components/Modal/BasicCenterModal'
import useDebounce from '@/src/common/hooks/useDebounce'
import { BadgeApproveReq_T, BadgeIssueRes_T } from '@/src/common/types/adminBadge'
import { CommonBadge_T } from '@/src/common/types/commonBadge'
import NextImg from '@/src/common/utils/NextImg'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'

type Props = {
  setModalData: Dispatch<SetStateAction<BadgeIssueRes_T | null>>
  뱃지요청정보: BadgeIssueRes_T
}

export default function BadgeApproveModal({ setModalData, 뱃지요청정보 }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [뱃지정보, set뱃지정보] = useState<CommonBadge_T[]>([])
  const [선택뱃지, set선택뱃지] = useState<CommonBadge_T | null>(null)
  const { register, handleSubmit, control, reset } = useForm<BadgeApproveReq_T>()

  const queryClient = useQueryClient()

  useEffect(() => {
    if (!isOpen) setModalData(null)
  }, [isOpen])

  const { mutate: editBadge } = useMutation({
    mutationFn: async (data: BadgeApproveReq_T) =>
      await axiosWithAuth.post(`/admin/verify/req/${뱃지요청정보.id}`, {
        bdg_name: 선택뱃지?.name,
        file: {
          자격번호: 1234,
          '자격 종목': '정보처리기사',
        },
      }),
    onSuccess: (variables) => {
      window.alert(JSON.stringify(variables.data.name) + '뱃지가 수정되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['badgeData'] })
      setModalData(null)
      reset()
    },
    onError: (error) => {
      window.alert('뱃지 추가에 실패했습니다.')
      console.error(error)
    },
  })

  const searchBadgeName = useWatch({
    control,
    name: 'bdg_name',
  })

  const debouunceBadgeName = useDebounce(searchBadgeName, 300)

  useEffect(() => {
    if (debouunceBadgeName) searchBadge(debouunceBadgeName)
  }, [debouunceBadgeName])

  const { mutate: searchBadge } = useMutation({
    mutationFn: async (data: BadgeApproveReq_T) => await axiosWithAuth.get(`/admin/badge?name=${data}`),
    onSuccess: (variables) => {
      set뱃지정보(variables.data)
    },
    onError: (error) => {
      console.error('뱃지 검색에 실패했습니다.')
      console.error(error)
    },
  })

  async function deleteBadgeReq(id: number) {
    if (window.confirm('정말 거절하시겠습니까?')) {
      const { data } = await axiosWithAuth.delete(`/admin/verify/req/${id}`)
      console.log('삭제완료:', data)
      alert('요청이 거절되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['badgeData'] })
    }
  }

  const onSubmit = handleSubmit((data) => {
    if (!선택뱃지) {
      window.alert('뱃지를 선택해주세요.')
      return
    }
    editBadge(data)
  })

  let 인증서류확장자 = 뱃지요청정보.content.split('.').pop()

  return (
    <BasicCenterModal setIsOpen={setIsOpen}>
      <form
        className="relative flex h-[80vh] w-[80vw] flex-wrap rounded-lg bg-white p-4 shadow-popupBox"
        onSubmit={onSubmit}
      >
        <div className="items-top flex h-full w-full gap-10">
          <div className="h-full w-[220px] overflow-y-auto pb-2 pr-4">
            <div className="kr-bold-14 mt-4">요청 아이디: {뱃지요청정보.id}</div>
            <div className="kr-bold-14 mt-4">유저 아이디: {뱃지요청정보.user_id}</div>
            <div className="h-full pb-10">
              <Input title="뱃지 검색" placeholder="연결할 뱃지를 검색해주세요" {...register('bdg_name')} />
              {뱃지정보.map((뱃지) => (
                <button
                  type="button"
                  key={뱃지.bdg_id}
                  className={`mt-2 flex w-full items-center gap-2 p-3 ${선택뱃지?.bdg_id === 뱃지.bdg_id && 'bg-lightgray'}`}
                  onClick={() => set선택뱃지((prev) => (prev === 뱃지 ? null : 뱃지))}
                >
                  <div className="h-5 w-5">
                    <NextImg src={뱃지.image} alt="뱃지 이미지" />
                  </div>
                  <div>{뱃지.name}</div>
                </button>
              ))}
              {선택뱃지 && (
                <div>
                  <div className="kr-bold-14 mt-4">선택된 뱃지</div>
                  <div className="kr-bold-12 mt-1">이름: {선택뱃지.name}</div>
                  <div className="kr-bold-12 mt-1">뱃지 타입: {선택뱃지.type}</div>
                  <div className="border-1 mt-2 border border-solid border-[#000] p-2">
                    <div className="kr-bold-14 mt-1">인증 방법</div>
                    <div className="kr-medium-12 mt-1">
                      {!!선택뱃지.auth.file?.memo
                        ? 선택뱃지.auth.file.memo
                        : '인증 방법이 등록되지 않았습니다. 일관성 있는 인증을 위해, 인증 방법 등록 후에 인증 절차를 진행해주세요'}
                    </div>
                  </div>
                </div>
              )}

              <button className="blueBtn mb-2 mt-10 block w-full" type="submit">
                승인하기
              </button>
              <button
                className="blueBtn block w-full !bg-red-600 hover:!bg-red-800"
                type="button"
                onClick={() => deleteBadgeReq(뱃지요청정보.id)}
              >
                거절하기
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="kr-bold-14 mt-1">설명: {뱃지요청정보.description}</div>
            {/* pdf랑 이미지 뷰어 */}
            {인증서류확장자 === 'pdf' ? (
              <>pdf</>
            ) : (
              <div className="h-full w-full">
                <NextImg src={뱃지요청정보.content} alt="인증서류" />
              </div>
            )}
          </div>
        </div>
      </form>
    </BasicCenterModal>
  )
}
