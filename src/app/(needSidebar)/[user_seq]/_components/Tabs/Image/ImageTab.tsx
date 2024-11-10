'use client'

import { OwnerImgListAtom } from '@/src/common/recoil/ownerAtom'
import { OwnerImgList_T } from '@/src/common/types/owner'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

export default function ImageTab() {
  const ownerImgList = useRecoilValue<OwnerImgList_T>(OwnerImgListAtom)

  return (
    <div className="maxWidthWithoutPadding scrollbar-hide mb-8 mt-4 flex h-fit flex-wrap overflow-x-auto">
      {ownerImgList.length > 0 ? (
        ownerImgList.map((img, index) => (
          <div key={img.src} className="mb-2 shrink-0 rounded-lg pr-[6px]">
            <Image
              src={img.src}
              alt={`Gallery ${index}`}
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
              className="max-h-[200px] max-w-full overflow-hidden rounded-lg border-[1px] border-solid border-black/40 object-cover"
            />
          </div>
        ))
      ) : (
        <p>등록된 이미지가 없습니다.</p>
      )}
    </div>
  )
}
