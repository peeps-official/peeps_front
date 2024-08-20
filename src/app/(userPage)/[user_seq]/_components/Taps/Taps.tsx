'use client'

export default function Taps() {
  return (
    <div className="font-inter flex shrink-0 gap-[24px] self-stretch overflow-hidden border-solid border-gray-medium px-[17px] pb-px pt-0 text-center text-tiny font-bold mq450:flex-wrap">
      <div className="relative flex min-w-[48px] flex-col">
        <div className="flex overflow-hidden px-[18px] py-4">
          <b className="relative flex w-3 min-w-[12px] items-center justify-center">홈</b>
        </div>
        <div className="absolute bottom-[-2px] left-[0px] right-[0px] !m-[0] h-[3px] w-full bg-black" />
      </div>
      <div className="text-dimgray-medium box-border flex min-w-[48px] overflow-hidden px-[18px] py-4">
        <div className="flex w-4">
          <b className="relative ml-[-5px] flex w-[26px] min-w-[26px] shrink-0 items-center justify-center [debug_commit:1de1738]">
            피드
          </b>
        </div>
      </div>
    </div>
  )
}
