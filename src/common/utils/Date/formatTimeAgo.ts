export function formatTimeAgo(isoDateString: string): string {
  const date = new Date(isoDateString)
  const now = new Date()

  const diffInMs = now.getTime() - date.getTime()

  const minutes = Math.floor(diffInMs / (1000 * 60))
  const hours = Math.floor(diffInMs / (1000 * 60 * 60))
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  const weeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7))

  if (minutes < 1) {
    return '방금 전'
  } else if (minutes < 60) {
    return `${minutes}분 전`
  } else if (hours < 24) {
    return `${hours}시간 전`
  } else if (days < 7) {
    return `${days}일 전`
  } else {
    // 날짜 포맷팅
    const year = date.getFullYear().toString().slice(2) // 연도에서 앞의 두 자리 제거
    const month = date.getMonth() + 1 // 월 (0부터 시작하므로 +1)
    const day = date.getDate()

    // 오전/오후 구분
    let hours12 = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours12 >= 12 ? '오후' : '오전'
    hours12 = hours12 % 12
    hours12 = hours12 ? hours12 : 12 // 0시를 12시로 변경

    // 시간과 분 포맷팅
    const formattedTime = `${ampm} ${hours12}:${minutes < 10 ? '0' + minutes : minutes}`

    return `${year}년 ${month}월 ${day}일 ${formattedTime}`
  }
}
