import NextImg from '../../utils/NextImg'

type ProfileCircleBadgeProps = {
  src: string
}

export default function ProfileCircleBadge({ src }: ProfileCircleBadgeProps) {
  return (
    <div className="h-[32px] w-[32px] relative object-cover rounded-full overflow-hidden">
      <NextImg alt="badge of Instagram" src={src} />
    </div>
  )
}
