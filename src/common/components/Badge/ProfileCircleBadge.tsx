import { Badge_T } from '../../types/badge'
import NextImg from '../../utils/NextImg'

type ProfileCircleBadgeProps = {
  badge: Badge_T
  selectedBadgeId: string
}

export default function ProfileCircleBadge({
  badge,
  selectedBadgeId,
}: ProfileCircleBadgeProps) {
  return (
    <div
      className={`h-[32px] w-[32px] relative object-cover rounded-full overflow-hidden ${
        badge.id === selectedBadgeId ? 'border-solid	border-2 ' : 'shadow-circleBadge'
      }`}
    >
      <NextImg alt="badge of Instagram" src={badge.image} />
    </div>
  )
}
