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
import { useFieldArray, useForm, useWatch } from 'react-hook-form'
import dynamic from 'next/dynamic'

const PdfReader = dynamic(() => import('./PdfReader'), {
  ssr: false,
})

type Props = {
  setModalData: Dispatch<SetStateAction<BadgeIssueRes_T | null>>
  뱃지요청정보: BadgeIssueRes_T
}

export default function BadgeApproveModal({ setModalData, 뱃지요청정보 }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [뱃지정보, set뱃지정보] = useState<CommonBadge_T[]>([])
  const [선택뱃지, set선택뱃지] = useState<CommonBadge_T | null>(null)
  const [is뱃지서류방법등록, setIs뱃지서류방법등록] = useState<boolean>(false)
  const { register, handleSubmit, control, reset } = useForm<BadgeApproveReq_T & { files: Record<string, string>[] }>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'files',
  })

  const queryClient = useQueryClient()

  useEffect(() => {
    if (!isOpen) setModalData(null)
  }, [isOpen])

  const { mutate: approveBadge } = useMutation({
    mutationFn: async (data: BadgeApproveReq_T) =>
      await axiosWithAuth.post(`/admin/verify/req/${뱃지요청정보.id}`, data),
    onSuccess: (variables) => {
      window.alert(JSON.stringify(variables.data.name) + '뱃지가 승인되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['badgeData'] })
      setModalData(null)
      reset()
    },
    onError: (error) => {
      window.alert('뱃지 추가에 실패했습니다.')
      console.error(error)
    },
  })

  async function deleteBadgeReq(id: number) {
    if (window.confirm('정말 거절하시겠습니까?')) {
      const { data } = await axiosWithAuth.delete(`/admin/verify/req/${id}`)
      console.log('삭제완료:', data)
      setModalData(null)
      alert('요청이 거절되었습니다.')
      queryClient.invalidateQueries({ queryKey: ['badgeData'] })
    }
  }

  const searchBadgeName = useWatch({
    control,
    name: 'bdg_name',
    defaultValue: 'default',
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

  const onSubmit = handleSubmit((data) => {
    if (!선택뱃지) {
      window.alert('뱃지를 선택해주세요.')
      return
    }

    console.log('data:', data)

    const fileRecord: Record<string, string> = {}
    data.files.forEach((input) => {
      fileRecord[input.key] = input.value
    })
    const submitData: BadgeApproveReq_T = {
      bdg_name: 선택뱃지.name,
      file: fileRecord,
    }

    console.log('submitData:', submitData)
    approveBadge(submitData)
  })

  let 인증서류확장자 = 뱃지요청정보.content.split('.').pop()

  return (
    <BasicCenterModal setIsOpen={setIsOpen}>
      <form
        className="relative flex h-[80vh] w-[80vw] flex-wrap rounded-lg bg-white p-4 shadow-popupBox"
        onSubmit={onSubmit}
      >
        <div className="items-top flex h-full w-full gap-10">
          <div className="h-full w-[240px] overflow-y-auto pb-2 pr-8">
            <div className="space-y-2 rounded-lg bg-gray-100 p-4 shadow-sm">
              <div className="flex items-center">
                <span className="kr-bold-14 w-24 text-gray-700">요청식별번호:</span>
                <span className="text-gray-900">{뱃지요청정보.id}</span>
              </div>
              <div className="flex items-center">
                <span className="kr-bold-14 w-24 text-gray-700">유저 아이디:</span>
                <span className="text-gray-900">{뱃지요청정보.user_id}</span>
              </div>
              <div className="">
                <span className="kr-bold-14 mt-1 w-24 text-gray-700">설명</span>
                <p className="flex-1 text-gray-900">{뱃지요청정보.description}</p>
              </div>
            </div>

            <div className="h-full pb-10">
              <Input title="뱃지 검색" placeholder="연결할 뱃지를 검색해주세요" {...register('bdg_name')} />
              {뱃지정보.map((뱃지) => (
                <button
                  type="button"
                  key={뱃지.bdg_id}
                  className={`mt-2 flex w-full items-center gap-2 p-3 ${선택뱃지?.bdg_id === 뱃지.bdg_id && 'bg-lightgray'}`}
                  onClick={() => {
                    set선택뱃지((prev) => (prev === 뱃지 ? null : 뱃지))
                    setIs뱃지서류방법등록(뱃지.auth.file?.memo ? true : false)
                  }}
                >
                  <div className="h-5 w-5">
                    <NextImg src={뱃지.image} alt="뱃지 이미지" />
                  </div>
                  <div>{뱃지.name}</div>
                </button>
              ))}
              {선택뱃지 && (
                <>
                  <div className="mt-4 space-y-2 rounded-lg bg-gray-100 p-4 shadow-sm">
                    <div className="kr-bold-14">선택된 뱃지</div>
                    <div className="kr-bold-12 mt-1">이름: {선택뱃지.name}</div>
                    <div className="kr-bold-12 mt-1">뱃지 타입: {선택뱃지.type}</div>
                    <div className="border-1 mt-2 border border-solid border-[#000] p-2">
                      <div className="kr-bold-14 mt-1">인증 방법</div>
                      <div className="kr-medium-12 mt-1">
                        {is뱃지서류방법등록
                          ? 선택뱃지.auth.file.memo
                          : '인증 방법이 등록되지 않았습니다. 일관성 있는 인증을 위해, 인증 방법 등록 후에 인증 절차를 진행해주세요'}
                      </div>
                    </div>
                  </div>
                  {is뱃지서류방법등록 && (
                    <>
                      <div className="mt-4 flex flex-col justify-between space-y-2 rounded-lg bg-gray-100 p-4 shadow-sm">
                        <p className="kr-bold-14 mb-[-1.5rem]">뱃지 세부 내용을 추가해주세요</p>

                        <div className="w-full">
                          {fields.map((field, index) => (
                            <div key={field.id} className="mt-8 flex w-full items-start justify-between gap-2 px-1">
                              <div className="flex-1">
                                <input
                                  {...register(`files.${index}.key`)}
                                  placeholder="키"
                                  className="w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                <input
                                  {...register(`files.${index}.value`)}
                                  placeholder="값"
                                  className="mt-2 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="block w-fit rounded-md bg-red-500 px-2 py-1 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                              >
                                x
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => append({ key: '', value: '' })}
                            className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                          >
                            입력 추가
                          </button>
                        </div>
                      </div>
                      <div className="mt-10 h-px bg-gray-300"></div>
                      <button className="blueBtn my-2 block w-full" type="submit">
                        승인하기
                      </button>
                      <button
                        className="blueBtn block w-full !bg-red-600 hover:!bg-red-800"
                        type="button"
                        onClick={() => deleteBadgeReq(뱃지요청정보.id)}
                      >
                        거절하기
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {인증서류확장자 === 'pdf' ? (
              <PdfReader url={뱃지요청정보.content} />
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
