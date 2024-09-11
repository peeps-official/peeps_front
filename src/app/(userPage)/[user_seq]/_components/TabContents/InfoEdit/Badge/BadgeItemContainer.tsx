'use client'

import ToggleButton from '@/src/common/components/Btn/Toggle'
import { formatDate } from '@/src/common/utils/Date/formatDate'
import NextImg from '@/src/common/utils/NextImg'
import { Fragment, ReactElement, useState } from 'react'
import { GoLock } from 'react-icons/go'
import { HiOutlineDownload, HiOutlineLink } from 'react-icons/hi'
import { MdAlternateEmail } from 'react-icons/md'

type AddAuthContainer_Props = {
  item: any
}

const BadgeTypes = [
  { id: 'login', title: '로그인 인증', icon: <GoLock style={{ height: 'fit-content' }} /> },
  { id: 'email', title: '이메일 인증', icon: <MdAlternateEmail style={{ height: 'fit-content' }} /> },
  { id: 'file', title: '서류 인증', icon: <HiOutlineDownload style={{ height: 'fit-content' }} /> },
  { id: 'blockchain', title: '블록체인 인증', icon: <HiOutlineLink style={{ height: 'fit-content' }} /> },
]

export default function BadgeItemContainer({ item }: AddAuthContainer_Props) {
  const [editMode, setEditMode] = useState(false)
  const [isSpread, setIsSpread] = useState(false)
  const { name, image, auth } = item

  return (
    <div
      onClick={() => {
        if (editMode) return
        setIsSpread((prev) => !prev)
      }}
      className="flex w-full max-w-[40em] flex-col gap-[10px] rounded-[8px] px-[14px] py-[16px] shadow-popupBox duration-200 ease-in hover:translate-y-[-0.2rem]"
    >
      <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-between gap-[2em]">
        <div className="flex items-center gap-[0.3em]">
          <div className="relative top-[0.1rem] flex h-[30px] w-[30px] items-center justify-center">
            <NextImg src={image} alt="badge" />
          </div>
          <p className="kr-bold-14">{name}</p>
        </div>
        <div>
          <button
            className={`blueBtn mr-[0.5em] font-bold ${editMode && '!bg-[#0066ff]'}`}
            onClick={() => {
              setEditMode((prev) => {
                if (!prev) setIsSpread(true)
                return !prev
              })
            }}
          >
            수정
          </button>
          <button className="blueBtn font-bold">삭제</button>
        </div>
      </div>
      <div className="flex gap-1">
        {!isSpread &&
          BadgeTypes.map((type) => <IsBadgeAuth key={type.id} auth={auth[type.id].isAuth} icon={type.icon} />)}
      </div>
      <div className="flex flex-col gap-[2rem]">
        {isSpread &&
          BadgeTypes.map((type) => (
            <IsBadgeSpreadInfo
              key={type.id}
              auth={auth[type.id]}
              title={type.title}
              icon={type.icon}
              editMode={editMode}
            />
          ))}
      </div>
    </div>
  )
}

type IsBadgeAuthProps = {
  auth: boolean
  icon: ReactElement
}

export function IsBadgeAuth({ auth, icon }: IsBadgeAuthProps) {
  const borderStyle = `border-[1px] border-solid border-[#e2e5ec] rounded-[1em] ${auth ? 'bg-[#fafafb]' : 'bg-[#bbb]'} px-[0.1em]`

  return (
    <div className="flex h-fit items-center justify-start gap-[0.5em] overflow-hidden">
      <div className={`flex h-[25px] w-[25px] items-center justify-center ${borderStyle}`}>{icon}</div>
    </div>
  )
}

type IsBadgeSpreadInfoProps = {
  auth: any
  title: string
  icon: ReactElement
  editMode: boolean
}

export function IsBadgeSpreadInfo({ auth, title, icon, editMode }: IsBadgeSpreadInfoProps) {
  if (!auth.isAuth) return <></>

  function TitleAndContent({ title, content }: { title: string; content: string }) {
    return (
      <tr className="flex items-center justify-between">
        <td className="text-[#666]">{title}</td>
        <td className="font-bold">{content}</td>
      </tr>
    )
  }

  return (
    <div className="flex flex-col gap-[0.5em]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[0.5em]">
          {<IsBadgeAuth auth={auth.isAuth} icon={icon} />}
          <span>{title}</span>
        </div>
      </div>

      <div className="kr-regular-14">
        <div className="rounded-[5px] bg-[#eee] p-[10px]">
          <TitleAndContent title="인증 날짜" content={formatDate(new Date(auth.authDay))} />
          {auth.description.length > 0 && <TitleAndContent title="설명" content={auth.description} />}
        </div>
        <div className="p-[10px]">
          {/* <div className="my-[0.5em] border-b-[1px] border-solid border-slate-400" /> */}
          {auth.detail.map((item: any) => (
            <Fragment key={item.title}>
              {(item.isPublic || editMode) && (
                <div className="flex justify-between gap-[1em]">
                  <div className="flex-1">
                    <TitleAndContent title={item.title} content={item.content} />
                  </div>
                  {editMode && (
                    <div className="mb-[0.5em]">
                      <ToggleButton isEnable={item.isPublic} />
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
