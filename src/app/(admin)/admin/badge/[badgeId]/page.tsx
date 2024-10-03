/**
 * 뱃지 디테일 정보 페이지
 *
 */

import BadgeDetail from './_components/BadgeDetail'

interface Props {
  params: {
    badgeId: string
  }
}

export default function BadgeDetailsPage({ params }: Props) {
  return (
    <div>
      <BadgeDetail badgeId={params.badgeId} />
    </div>
  )
}
