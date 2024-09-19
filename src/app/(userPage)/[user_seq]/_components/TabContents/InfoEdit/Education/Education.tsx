'use client'

import { axiosWithAuth } from '@/src/common/api/instance'
import { Input } from '@/src/common/components/Input/Input'
import ModalForm from '@/src/common/components/Modal/ModalForm'
import { Education_T } from '@/src/common/types/user'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import Education from '../../Info/Item/Education'

export default function EducationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">학력</h2>
        <button className="blueBtn" onClick={() => setIsModalOpen(true)}>
          추가하기
        </button>
      </div>
      <div className="mt-5">
        <Education />
      </div>
      {isModalOpen && <AddEducationModal setIsOpen={setIsModalOpen} />}
    </section>
  )
}

function AddEducationModal({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  const { register, handleSubmit, control, setValue } = useForm<Education_T>()
  const user_seq = usePathname()

  const onSubmit: SubmitHandler<Education_T> = async (inputVal) => {
    // pathname은 '/'로 시작하므로 앞에 '/'를 작성하지 않았습니다.
    const { data, status } = await axiosWithAuth.post(`${user_seq}/degree`, {
      school: inputVal.school,
      degree: inputVal.degree,
      major: inputVal.major,
      startDate: inputVal.startDate,
      endDate: inputVal.endDate,
      enrollmentStatus: inputVal.enrollmentStatus,
      grade: Number(inputVal.grade),
      description: inputVal.description,
    })
    console.log(data, status)

    if (status === 201) {
      alert('학력이 추가되었습니다.')
      setIsOpen(false)
    }
  }

  const is재학 = useWatch({
    control,
    name: 'enrollmentStatus', // 구독할 필드 이름
  })

  const is졸업날짜비활성화 = is재학 === '휴학' || is재학 === '재학'

  if (is졸업날짜비활성화) setValue('endDate', '')

  return (
    <ModalForm title="학력 추가" onSubmit={handleSubmit(onSubmit)} setIsOpen={setIsOpen}>
      <div>
        <fieldset className="flex gap-5">
          <Input title="학교명" {...register('school', { required: true })} placeholder="ex) 한경국립대학교" />
          <Input
            title="학위"
            {...register('degree', { required: true })}
            placeholder="ex) 고등학교 / 학사 / 석사 / 박사"
          />
          <Input title="전공" {...register('major', { required: true })} placeholder="ex) 컴퓨터공학" />
        </fieldset>

        <div className="flex gap-10">
          <fieldset className="flex gap-5">
            <Input title="입학 날짜" type="date" {...register('startDate', { required: true })} />
            <Input title="졸업 날짜" type="date" {...register('endDate')} disabled={is졸업날짜비활성화} />
          </fieldset>
          <fieldset className="flex gap-2">
            <Input title="재학" value="재학" type="radio" {...register('enrollmentStatus', { required: true })} />
            <Input title="휴학" value="휴학" type="radio" {...register('enrollmentStatus', { required: true })} />
            <Input title="자퇴" value="자퇴" type="radio" {...register('enrollmentStatus', { required: true })} />
            <Input title="졸업" value="졸업" type="radio" {...register('enrollmentStatus', { required: true })} />
          </fieldset>
        </div>
        <Input title="학점" {...register('grade')} />
        <Input title="설명" {...register('description')} />

        <button className="blueBtn mt-5 w-fit font-bold">생성하기</button>
      </div>
    </ModalForm>
  )
}
