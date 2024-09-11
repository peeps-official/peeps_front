'use client'

import { useState } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import AddAuthContainer from '../AddAuthContainer'
import { ConfirmNumberInput, EmailInput, MakableBadgeInfo } from './StepInput'

export default function GetEmailAuth() {
  const [stepData, setStepData] = useState({
    step: 0,
    data: { email: '' },
  })

  console.log(stepData)

  return (
    <AddAuthContainer
      icon={<MdAlternateEmail />}
      title="이메일 인증"
      subTitle="다양한 이메일을 통해서 인증을 받을 수 있어요."
    >
      <EmailInput stepData={stepData} setStepData={setStepData} />
      {stepData.step >= 1 && <ConfirmNumberInput stepData={stepData} setStepData={setStepData} />}
      {stepData.step === 2 && <MakableBadgeInfo stepData={stepData} setStepData={setStepData} />}
    </AddAuthContainer>
  )
}
