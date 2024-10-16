'use client'
import { popUpData } from '@/src/tmp_data/dummy'
import CommentInput from './CommentInput'
import PhotoGallery from './Picture'
import Post from './Post'

import { OwnerPostListAtom } from '@/src/common/recoil/userHome'
import { POST_ARR_T } from '@/src/common/types/post'
import { useRecoilValue } from 'recoil'
import BadgeBox from '../InfoEdit/AddBadge/BadgeBox'
import { OwnerBadgeListAtom } from '@/src/common/recoil/ownerAtom'
import { OwnerBadge_T } from '@/src/common/types/owner'

export default function Feed() {
  const ownerBadgeList = useRecoilValue<OwnerBadge_T[]>(OwnerBadgeListAtom)
  const feedData = useRecoilValue<POST_ARR_T>(OwnerPostListAtom)

  return (
    <div className="flex w-full gap-10">
      <div className="flex w-full flex-col">
        <CommentInput />
        <div className="first:mt-0 [&>div]:my-5">
          {feedData.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className="flex max-w-[490px] flex-col gap-5">
        <BadgeBox badges={ownerBadgeList} />
        <PhotoGallery />
      </div>
    </div>
  )
}

{
  /* <MediaLinks /> */
}
