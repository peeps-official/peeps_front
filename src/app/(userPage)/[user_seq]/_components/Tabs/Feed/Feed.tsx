'use client'
import CommentInput from './CommentInput'
import PhotoGallery from './PhotoGallery'
import Post from './Post'

import { OwnerBadgeListAtom } from '@/src/common/recoil/ownerAtom'
import { OwnerPostListAtom } from '@/src/common/recoil/userHome'
import { OwnerBadge_T } from '@/src/common/types/owner'
import { POST_ARR_T } from '@/src/common/types/post'
import { useRecoilValue } from 'recoil'
import BadgeBox from '../InfoEdit/AddBadge/BadgeBox'

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
      <div className="flex w-[480px] flex-shrink-0 flex-col gap-5">
        <BadgeBox badges={ownerBadgeList} />
        <PhotoGallery />
      </div>
    </div>
  )
}

{
  /* <MediaLinks /> */
}
