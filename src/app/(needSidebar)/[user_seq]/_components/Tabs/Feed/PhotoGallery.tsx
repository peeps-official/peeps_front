import { OwnerImgListAtom } from '@/src/common/recoil/ownerAtom'
import { OwnerImgList_T } from '@/src/common/types/owner'
import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'

export default function PhotoGallery() {
  const ownerImgList = useRecoilValue<OwnerImgList_T>(OwnerImgListAtom)

  return (
    <div className="mx-auto w-full rounded-lg p-4 shadow-popupBox">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="kr-bold-14">사진</h1>
        <Link
          href={{
            query: { tab: 'image' },
          }}
          className="text-blue-500"
        >
          사진 모두 보기
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {ownerImgList.map((img, index) => {
          if (6 <= index) return null
          return (
            <div key={img.src} className="overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={`Gallery ${index}`}
                className="h-full w-full object-cover"
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
