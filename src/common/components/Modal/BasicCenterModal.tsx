'use client'

type Props = {
  setIsOpen: (state: boolean) => void
  children: React.ReactNode
}

export default function BasicCenterModal({ setIsOpen, children }: Props) {
  return (
    <div
      className="fixed left-0 top-0 z-modal flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        setIsOpen(false)
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>
  )
}
