type BadgeDetailPageParams = {
  params: {
    badgeId: string
  }
}

export default function BadgeDetailPage({ params }: BadgeDetailPageParams) {
  return <>뱃지 {params.badgeId}에 오신 것을 환영합니다.</>
}
