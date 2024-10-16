import { popUpData } from '@/src/tmp_data/dummy'
import { useEffect, useRef } from 'react'
import Carrer from './Item/Carrer'
import Education from './Item/Education'

import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import NextImg from '@/src/common/utils/NextImg'
import { useRecoilValue } from 'recoil'
import Introduce from './Introduce'
import { OwnerProfile_T } from '@/src/common/types/owner'
import { OwnerProfileStateAtom } from '@/src/common/recoil/ownerAtom'

export default function Info() {
  const ownerData = useRecoilValue<OwnerProfile_T>(OwnerProfileStateAtom)
  const isOwner = useRecoilValue<boolean>(IsOwnerAtom)

  const { profile, badges, educate, career } = popUpData
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          window.scrollTo({
            top: -200,
            behavior: 'smooth',
          })
        }
      })
    }, options)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <>
      <div className="relative left-[-200px] top-[-20px]" ref={sectionRef} />
      <div className="grid items-start gap-[5rem]" style={{ gridTemplateColumns: '4fr 8fr' }}>
        <div className="sticky top-0 flex flex-col gap-5 self-start">
          <div className="mx-auto w-full rounded-lg p-4 shadow-popupBox">
            <div className="h-24 w-24 rounded-full">
              <NextImg src="/images/profile/profile.svg" alt="profile image" />
            </div>
            <div>대충 이름</div>
            <div>대충 소개</div>
            <div>대충 관련 링크</div>
          </div>
          <Introduce />
          <div className="mx-auto w-full rounded-lg p-4 shadow-popupBox">대충 뱃지 종류</div>
        </div>
        <div className="flex flex-col gap-5">
          <Education />
          <Carrer />
        </div>
      </div>
    </>
  )
}
