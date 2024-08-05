import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1>404 ERROR</h1>
      <p>찾으시는 페이지가 없습니다.</p>
      <Link href={'/'}>메인 페이지로 이동하기</Link>
    </div>
  )
}
