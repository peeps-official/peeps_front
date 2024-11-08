'use client'

import BasicCenterModal from '@/src/common/components/Modal/BasicCenterModal'
import { Post_T } from '@/src/common/types/post'
import { useState } from 'react'

type Props = {
  post: Post_T // 글 정보
  setIsOpen: (state: boolean) => void
}

export default function PostDetailModal({ post, setIsOpen }: Props) {
  const { description, image, create_date, comments, boardLike } = post

  return <BasicCenterModal setIsOpen={setIsOpen}>gdgd</BasicCenterModal>
}
