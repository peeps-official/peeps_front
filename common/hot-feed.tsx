import type { NextPage } from 'next'
import { Tag } from './Tag'
import { Badge } from './Badge'

export type feedType = {
  name: string
  property: string[]
  text: string
}

const Feed: NextPage<feedType> = ({ name, property, text }) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="flex flex-row justify-between">
        <div className="font-extrabold">{name}</div>
        <div className="h-4 rounded-10xs  flex flex-row text-xs text-gray-200 flex-wrap gap-[6px]">
          {property.map((a, i) => {
            return <Tag title={a} />
          })}
        </div>
      </div>
      <div className="pb-4 w-[212px] relative text-3xs leading-[142%] text-black inline-block z-[1]">
        {text}
      </div>
    </div>
  )
}

export default function HotFeed() {
  return (
    <div className="w-[254px] rounded-8xs bg-white flex flex-col items-center justify-start pt-[13px] pb-[273px] pr-4 pl-[17px] box-border gap-[5px] text-left text-sm text-black ">
      <div className="self-stretch flex flex-col items-end justify-start py-0 px-[5px] gap-[8px] pb-10">
        <div className="self-stretch flex flex-row items-start justify-start py-0   text-mini">
          <b className="h-[25px] flex-1 relative flex items-center z-[1]">
            전체 인기 글
          </b>
        </div>
        <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-px pb-[9px] box-border">
          <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
        </div>

        <Feed
          name="한경이"
          property={['한경대학교', '24학번']}
          text="처음에는 마음이 금방 산만해지고, 효과가 ..."
        />
        <Feed
          name="두경이"
          property={['한경대학교', '24학번']}
          text="처음에는 마음이 금방 산만해지고, 효과가 ..."
        />
        <Feed
          name="세경이"
          property={['한경대학교', '24학번']}
          text="처음에는 마음이 금방 산만해지고, 효과가 ..."
        />
      </div>

      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 text-mini pt-20">
        <b className="h-[25px] flex-1 relative flex items-center z-[1]">
          핫한 뱃지
        </b>
      </div>
      <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-px pb-[9px] box-border">
        <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
      </div>
      <Badge
        name="비트코인"
        image="/images/bitcoin.png"
        property={['1개', '10개', '100개']}
      />
      <Badge
        name="수능"
        image="/images/hknu.png"
        property={['백분위98', '국어5등급']}
      />
    </div>
  )
}
