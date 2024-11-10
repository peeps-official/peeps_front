'use client'

import { LoginUserFeedPostListAtom } from '@/src/common/recoil/userAtom'
import { FEED_POST_T } from '@/src/common/types/post'
import { useRecoilValue } from 'recoil'
import Post from '../../[user_seq]/_components/Tabs/Post/Post'

export default function UserFeed() {
  const feedData = useRecoilValue<FEED_POST_T[]>(LoginUserFeedPostListAtom)

  return (
    <div className="first:mt-0 [&>div]:my-5">
      {feedData.length > 0 ? (
        feedData.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <div className="w-full pt-10 text-center">게시물이 없습니다.</div>
      )}
    </div>
  )
}
