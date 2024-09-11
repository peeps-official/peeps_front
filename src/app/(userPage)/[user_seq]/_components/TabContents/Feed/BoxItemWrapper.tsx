type BoxItemProps = {
  title: string
  children: React.ReactNode
}

export default function BoxItemWrapper({ title, children }: BoxItemProps) {
  return (
    <div className="mx-auto w-full rounded-lg p-4 shadow-popupBox">
      <div className="mb-4 flex flex-col items-start justify-between">
        <h1 className="kr-bold-14">{title}</h1>
      </div>
      {children}
    </div>
  )
}
