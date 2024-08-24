'use client'

import { useState } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { ConfirmNumberInput, EmailInput, MakableBadgeInfo } from './StepInput'
import AddAuthContainer from '../AddAuthContainer'

export default function GetEmailAuth() {
  const [step, setStep] = useState(0)

  return (
    <AddAuthContainer
      icon={<MdAlternateEmail />}
      title="이메일 인증"
      subTitle="다양한 이메일을 통해서 인증을 받을 수 있어요."
    >
      <EmailInput step={step} setStep={setStep} />
      {step >= 1 && <ConfirmNumberInput step={step} setStep={setStep} />}
      {step === 2 && <MakableBadgeInfo step={step} setStep={setStep} />}
    </AddAuthContainer>
  )
}
