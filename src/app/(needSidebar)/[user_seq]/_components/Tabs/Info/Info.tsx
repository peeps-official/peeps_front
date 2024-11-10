import { popUpData } from '@/src/tmp_data/dummy'
import { useEffect, useRef } from 'react'
import Carrer from './Item/Carrer'
import Education from './Item/Education'

import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import NextImg from '@/src/common/utils/NextImg'
import { useRecoilValue } from 'recoil'
import Introduce from './Introduce'
import { OwnerProfile_T } from '@/src/common/types/owner'
import { OwnerBadgeListAtom, OwnerProfileStateAtom } from '@/src/common/recoil/ownerAtom'
import BadgeBox from '../InfoEdit/AddBadge/BadgeBox'
import { Badge_T } from '@/src/common/types/badge'

export default function Info() {
  const ownerBadgeList = useRecoilValue<Badge_T[]>(OwnerBadgeListAtom)
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
          <Introduce />
          <BadgeBox badges={ownerBadgeList} />
        </div>
        <div className="flex flex-col gap-5">
          <Education />
          <Carrer />
        </div>
      </div>
    </>
  )
}
