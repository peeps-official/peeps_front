'use client'

import { Input } from '@/src/common/components/Input/Input'

export default function Education() {
  return (
    <div>
      <fieldset className="flex gap-5">
        <Input title="학교명" />
        <Input title="학위" />
        <Input title="전공" />
      </fieldset>

      <div className="flex gap-10">
        <fieldset className="flex gap-5">
          <Input
            title="입학 날짜"
            type="date"
            defaultValue={'2024-01-01'}
            onChange={(e) => console.log(e.target.value)}
          />
          <Input title="졸업 날짜" type="date" />
        </fieldset>
        <fieldset className="flex gap-2">
          <Input title="재학" value="재학" name="status" type="radio" />
          <Input title="휴학" value="휴학" name="status" type="radio" />
          <Input title="자퇴" value="자퇴" name="status" type="radio" />
          <Input title="졸업" value="졸업" name="status" type="radio" />
        </fieldset>
      </div>
      <Input title="학점" />
      <Input title="설명" />

      <div className="blueBtn mt-5 w-fit font-bold">생성하기</div>
    </div>
  )
}
