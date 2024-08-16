'use client'

import { useState } from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import { ConfirmNumberInput, EmailInput, MakableBadgeInfo } from './StepInput'

export default function GetEmailAuth() {
  const [step, setStep] = useState(0)

  return (
    <>
      <div className="border-[1px] border-solid px-[14px] py-[16px]">
        <div className="flex items-center">
          <MdAlternateEmail />
          <p>이메일 인증</p>
        </div>
        <div className="kr-normal-12">메일을 통해 인증을 받을 수 있어요.</div>
        <EmailInput step={step} setStep={setStep} />
        {step === 1 && <ConfirmNumberInput step={step} setStep={setStep} />}
        {step === 2 && <MakableBadgeInfo step={step} setStep={setStep} />}
      </div>
    </>
  )
}
