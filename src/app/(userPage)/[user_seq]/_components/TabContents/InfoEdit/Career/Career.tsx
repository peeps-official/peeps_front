'use client'

import { Input } from '@/src/common/components/Input/Input'

export default function Career() {
  return (
    <div>
      <fieldset className="flex gap-5">
        <Input title="회사명" />
        <Input title="부서명" />
        <Input title="직책" />
      </fieldset>
      <fieldset className="flex gap-10">
        <Input title="직군" />
        <Input title="근무유형" />
      </fieldset>
      <div className="flex gap-10">
        <Input title="재직 중" value="재학" name="status" type="radio" />
        <Input title="시작일" type="date" defaultValue={'2024-01-01'} onChange={(e) => console.log(e.target.value)} />
        <Input title="종료일" type="date" />
      </div>
      <Input title="설명" />

      <div className="blueBtn mt-5 w-fit font-bold">생성하기</div>
    </div>
  )
}
