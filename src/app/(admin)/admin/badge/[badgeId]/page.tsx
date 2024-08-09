/**
 * 뱃지 디테일 정보 페이지
 *
 */

import BadgeDetail from '../../_components/Badge/BadgeDetail'

interface Props {
  params: {
    badgeId: string
  }
}

export default function BadgeDetailsPage({ params }: Props) {
  console.log(params.badgeId)
  return (
    <div>
      <BadgeDetail />
    </div>
  )
}
