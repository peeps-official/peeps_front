'use client'

import { OwnerImgListAtom } from '@/src/common/recoil/ownerAtom'
import { OwnerImgList_T } from '@/src/common/types/owner'
import { useRecoilValue } from 'recoil'

export default function ImageTab() {
  const ownerImgList = useRecoilValue<OwnerImgList_T>(OwnerImgListAtom)

  return (
    <div className="maxWidthWithoutPadding scrollbar-hide mb-8 mt-4 flex h-fit flex-wrap overflow-x-auto">
      {ownerImgList.map((img, index) => (
        <div key={img.post_id} className="mb-2 shrink-0 rounded-lg pr-[6px]">
          <img
            src={img.src}
            alt={`Gallery ${index}`}
            className="max-h-[200px] max-w-full overflow-hidden rounded-lg border-[1px] border-solid border-black/40 object-cover"
          />
        </div>
      ))}
    </div>
  )
}
