'use client'

import Post from '@/src/app/(userPage)/[user_seq]/_components/Tabs/Post/Post'
import { CircleFeedDataAtom } from '@/src/common/recoil/circleAtom'
import { Post_T } from '@/src/common/types/post'
import { useRecoilValue } from 'recoil'
import CircleCommentInput from './CircleCommentInput'

export default function CircleFeed() {
  const feedData = useRecoilValue<Post_T[] | null>(CircleFeedDataAtom)

  return (
    <div className="flex w-full gap-10">
      <div className="flex w-full flex-col">
        <CircleCommentInput />
        <div className="first:mt-0 [&>div]:my-5">
          {feedData && feedData.length > 0 ? (
            feedData.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <div className="w-full pt-10 text-center">게시물이 없습니다.</div>
          )}
        </div>
      </div>
      <div className="flex w-[480px] flex-shrink-0 flex-col gap-5">
        {/* <BadgeBox badges={ownerBadgeList} />
        <PhotoGallery /> */}
      </div>
    </div>
  )
}

{
  /* <MediaLinks /> */
}
