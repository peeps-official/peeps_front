'use client'

type TapItemProps = {
  title: string
  isClicked: boolean
  onClick?: () => void
}

export default function TapItem({ title, isClicked, onClick }: TapItemProps) {
  return (
    <button className="flex items-center justify-center rounded-[5px] text-center hover:bg-slate-300" onClick={onClick}>
      <div className={`kr-bold-16 relative px-[1em] py-[14px]`}>
        <b className={`flex items-center justify-center ${!isClicked && 'text-[#6f6f6f]'}`}>{title}</b>
        {isClicked && (
          <div className="absolute bottom-[1px] left-[0.5em] right-[0.5em] h-[3px] rounded-[2px] bg-black" />
        )}
      </div>
    </button>
  )
}
