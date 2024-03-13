import type { NextPage } from 'next'
import { Tag } from './Tag'

export type BadgeType = {
  name: string
  image: string
  property: string[]
}

export const Badge: NextPage<BadgeType> = ({ name, image, property }) => {
  return (
    <div className="self-stretch flex flex-row pb-4 pr-[26px] text-xs text-gray-200">
      <div className="flex flex-col gap-[5px]">
        {/* 이름 */}
        <div className="flex flex-row gap-[8px] text-left text-sm text-black">
          <img className="h-5 w-5 object-cover min-h-[20px]" src={image} />
          <div> {name} </div>
        </div>
        {/* 태그 */}
        <div className="pl-7 flex-1 flex flex-row flex-wrap gap-[6px]">
          {property.map((a, i) => {
            return <Tag title={a} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}
