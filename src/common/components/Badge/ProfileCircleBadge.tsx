import { Badge_T } from '../../types/badge'
import NextImg from '../../utils/NextImg'

type ProfileCircleBadgeProps = {
  badge: Badge_T
  selectedBadgeId: number
}

export default function ProfileCircleBadge({ badge, selectedBadgeId }: ProfileCircleBadgeProps) {
  return (
    <div
      className={`relative h-[32px] w-[32px] overflow-hidden rounded-full object-cover ${
        badge.bdg_id === selectedBadgeId ? 'border-2 border-solid' : 'shadow-circleBadge'
      }`}
    >
      <NextImg alt="badge of Instagram" src={badge.image} />
    </div>
  )
}
