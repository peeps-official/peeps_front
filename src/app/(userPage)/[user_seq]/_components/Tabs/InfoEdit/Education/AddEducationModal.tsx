'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { ErrorForm, Input } from '@/src/common/components/Input/Input'
import ModalForm from '@/src/common/components/Modal/ModalForm'
import { OwnerEducation_T } from '@/src/common/types/owner'
import { useQueryClient } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'

type Props = {
  defaultData?: OwnerEducation_T
  type: 'new' | 'edit'
  setIsOpen: (isOpen: boolean) => void
}

export default function AddEducationModal({ defaultData, type, setIsOpen }: Props) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<OwnerEducation_T>({ criteriaMode: 'all', defaultValues: defaultData })
  const user_seq = usePathname().slice(1)

  const queryClient = useQueryClient()

  const onSubmit: SubmitHandler<OwnerEducation_T> = async (inputVal) => {
    const reqData = {
      school: inputVal.school,
      degree: inputVal.degree,
      major: inputVal.major,
      startDate: inputVal.startDate,
      endDate: inputVal.endDate,
      enrollmentStatus: inputVal.enrollmentStatus,
      grade: Number(inputVal.grade),
      description: inputVal.description,
    }

    if (type === 'edit')
      defaultData && defaultData.id ? console.log('학력 정보가 없습니다.') : console.log('학력 레츠고 하시면 됩니다.')

    const { status } =
      type === 'new'
        ? await axiosWithAuth.post(`/${user_seq}/degree`, reqData)
        : await axiosWithAuth.patch(`/${user_seq}/degree/${defaultData?.id}`, reqData)

    if (status === 200) {
      alert('학력이 수정되었습니다.')
      setIsOpen(false)
    } else if (status === 201) {
      alert('학력이 추가되었습니다.')
      setIsOpen(false)
    }
    queryClient.invalidateQueries({ queryKey: ['userData'] })
  }

  const is재학 = useWatch({
    control,
    name: 'enrollmentStatus', // 구독할 필드 이름
  })

  const is졸업날짜비활성화 = is재학 === '휴학' || is재학 === '재학'

  if (is졸업날짜비활성화) setValue('endDate', '')

  return (
    <ModalForm
      title={type === 'new' ? '학력 추가' : '학력 수정'}
      onSubmit={handleSubmit(onSubmit)}
      setIsOpen={setIsOpen}
    >
      <div>
        <fieldset className="flex gap-5">
          <Input
            title="학교명"
            requiredStar={true}
            {...register('school', { required: '필수 입력 값 입니다.' })}
            placeholder="ex) 한경국립대학교"
            errors={errors}
          />
          <Input
            title="학위"
            requiredStar={true}
            {...register('degree', { required: '필수 입력 값 입니다.' })}
            placeholder="ex) 고등학교 / 학사 / 석사 / 박사"
            errors={errors}
          />
          <Input
            title="전공"
            requiredStar={true}
            {...register('major', { required: '필수 입력 값 입니다.' })}
            placeholder="ex) 컴퓨터공학"
            errors={errors}
          />
        </fieldset>

        <div className="flex gap-10">
          <fieldset className="flex gap-5">
            <Input
              title="입학 날짜"
              type="date"
              requiredStar={true}
              {...register('startDate', { required: '필수 입력 값 입니다.' })}
              errors={errors}
            />
            <Input
              title="졸업 날짜"
              type="date"
              {...register('endDate')}
              disabled={is졸업날짜비활성화}
              errors={errors}
            />
          </fieldset>
          <div>
            <fieldset className="flex gap-2">
              <Input
                title="재학"
                value="재학"
                type="radio"
                {...register('enrollmentStatus', { required: '필수 입력 값 입니다.' })}
              />
              <Input
                title="휴학"
                value="휴학"
                type="radio"
                {...register('enrollmentStatus', { required: '필수 입력 값 입니다.' })}
              />
              <Input
                title="자퇴"
                value="자퇴"
                type="radio"
                {...register('enrollmentStatus', { required: '필수 입력 값 입니다.' })}
              />
              <Input
                title="졸업"
                value="졸업"
                type="radio"
                {...register('enrollmentStatus', { required: '필수 입력 값 입니다.' })}
              />
            </fieldset>
            <ErrorForm message={errors.enrollmentStatus?.message} />
          </div>
        </div>
        <Input title="학점" {...register('grade')} />
        <Input title="설명" {...register('description')} />

        <button className="blueBtn mt-5 w-fit font-bold" onClick={() => {}}>
          {type === 'new' ? '생성하기' : '수정하기'}
        </button>
      </div>
    </ModalForm>
  )
}
