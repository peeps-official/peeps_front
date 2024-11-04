'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { Input } from '@/src/common/components/Input/Input'
import ModalForm from '@/src/common/components/Modal/ModalForm'
import { OwnerCareer_T } from '@/src/common/types/owner'
import { useQueryClient } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'

type Props = {
  defaultData?: OwnerCareer_T
  type: 'new' | 'edit'
  setIsOpen: (isOpen: boolean) => void
}

export default function AddCareerModal({ defaultData, type, setIsOpen }: Props) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<OwnerCareer_T>({ criteriaMode: 'all', defaultValues: defaultData })
  const user_seq = usePathname().slice(1)

  const queryClient = useQueryClient()

  const onSubmit: SubmitHandler<OwnerCareer_T> = async (inputVal) => {
    const reqData = {
      company: inputVal.company,
      teamName: inputVal.teamName,
      jobRole: inputVal.jobRole,
      jobTitle: inputVal.jobTitle,
      jobType: inputVal.jobType,
      startDate: inputVal.startDate,
      endDate: inputVal.endDate,
      isCurrently: inputVal.isCurrently === 'checked' ? true : false,
      description: inputVal.description,
    }

    if (type === 'edit')
      defaultData && defaultData.id ? console.log('이력 정보가 없습니다.') : console.log('이력 레츠고 하시면 됩니다.')

    const { data, status } =
      type === 'new'
        ? await axiosWithAuth.post(`/${user_seq}/career`, reqData)
        : await axiosWithAuth.patch(`/${user_seq}/career/${defaultData?.id}`, reqData)

    if (status === 200) {
      alert('이력 수정되었습니다.')
      setIsOpen(false)
    } else if (status === 201) {
      alert('이력 추가되었습니다.')
      setIsOpen(false)
    }
    queryClient.invalidateQueries({ queryKey: ['userData'] })
  }

  const is재직 = useWatch({
    control,
    name: 'isCurrently', // 구독할 필드 이름
  })

  const is퇴사일비활성화 = is재직 === 'checked' ? true : false

  if (is퇴사일비활성화) setValue('endDate', '')

  return (
    <ModalForm
      title={type === 'new' ? '이력 추가' : '이력 수정'}
      onSubmit={handleSubmit(onSubmit)}
      setIsOpen={setIsOpen}
    >
      <div>
        <fieldset className="flex gap-5">
          <Input
            title="회사명"
            requiredStar={true}
            {...register('company', { required: '필수 입력 값 입니다.' })}
            placeholder="ex) 토스"
            errors={errors}
          />
          <Input
            title="부서명"
            {...register('teamName')}
            placeholder="ex) 개발팀 / 마케팅팀 / 인사팀"
            errors={errors}
          />
          <Input title="직책" {...register('jobRole')} placeholder="ex) 팀장 / 팀원" errors={errors} />
        </fieldset>
        <fieldset>
          <Input title="직군" {...register('jobTitle')} placeholder="ex) 프론트엔드 개발" errors={errors} />
          <Input
            title="계약 형태"
            {...register('jobType')}
            placeholder="ex) 프리랜서 / 정규직 / 계약직"
            errors={errors}
          />
        </fieldset>

        <div className="flex gap-10">
          <fieldset className="flex flex-1 gap-5">
            <Input
              title="입사 날짜"
              type="date"
              requiredStar={true}
              {...register('startDate', { required: '필수 입력 값 입니다.' })}
              errors={errors}
            />
            <Input title="퇴사 날짜" type="date" {...register('endDate')} disabled={is퇴사일비활성화} errors={errors} />
          </fieldset>
          <fieldset className="flex gap-2">
            <Input title="재직 중" value="checked" type="checkbox" {...register('isCurrently')} />
          </fieldset>
        </div>
        <Input title="설명" {...register('description')} errors={errors} />
        <button type="submit" className="blueBtn mt-5 w-fit font-bold">
          {type === 'new' ? '생성하기' : '수정하기'}
        </button>
      </div>
    </ModalForm>
  )
}
