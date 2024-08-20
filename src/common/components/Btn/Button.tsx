type ButtonProps = {
  icons?: React.ReactNode
  title: string
  onClickFn: () => void
  styles?: string
}

export default function Button({ icons, title, onClickFn, styles = '' }: ButtonProps) {
  return (
    <button onClick={onClickFn} className={'btn ' + styles}>
      <b className="flex gap-[0.5em]">
        {icons && <span className="flex items-center">{icons}</span>}
        <span>{title}</span>
      </b>
    </button>
  )
}
