'use client'

import { popUpData } from '@/src/tmp_data/dummy'
import CommentInput from './CommentInput'
import MediaLinks from './MyBoard'
import PhotoGallery from './Picture'
import Post from './Post'
import BadgeBox from '../InfoTab/AddBadge/BadgeBox'
import Introduce from './Introduce'

export default function Feed() {
  const { profile, badges, educate, career } = popUpData

  return (
    <div className="flex w-full gap-10">
      <div className="flex w-full flex-col">
        <CommentInput />
        <div className="first:mt-0 [&>div]:my-5">
          <Post />
          <Post />
        </div>
      </div>
      <div className="flex max-w-[490px] flex-col gap-5">
        <Introduce />
        <BadgeBox badges={badges} />
        <MediaLinks />
        <PhotoGallery />
      </div>
    </div>
  )
}
