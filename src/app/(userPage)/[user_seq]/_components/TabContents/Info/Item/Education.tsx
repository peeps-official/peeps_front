import { useQuery } from '@tanstack/react-query'
import BoxItemWrapper from '../../Feed/BoxItemWrapper'
import { getOwnerHistory } from '@/src/common/api/user'
import { usePathname } from 'next/navigation'
import { Education_T } from '@/src/common/types/user'
import { useRecoilValue } from 'recoil'
import { IsOwnerAtom } from '@/src/common/recoil/userHome'

export default function Education() {
  const user_seq_with_slash = usePathname()
  const user_seq = user_seq_with_slash.slice(1)

  const { isSuccess, error, data } = useQuery({
    queryKey: ['table', user_seq],
    queryFn: () => getOwnerHistory(user_seq),
  })
  return <BoxItemWrapper title="교육">{isSuccess && <HistoryBox items={data} />}</BoxItemWrapper>
}

type HistoryBoxProps = {
  items: Education_T[]
}

function HistoryBox({ items }: HistoryBoxProps) {
  const isOwner = useRecoilValue(IsOwnerAtom)

  return (
    <>
      <table className="w-[368px] table-auto">
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="relative">
              <td className="p-2">
                <div className="kr-bold-18 mb-1">{item.school}</div>
                <div className="kr-medium-12 text-gray-400">
                  {item.startDate.split('-')[0]} ~ {item.endDate.split('-')[0]}
                </div>
              </td>
              <td className="p-2 align-top">
                <div className="flex items-center gap-1">
                  <span className="kr-bold-14">{item.major}</span>
                  <span>·</span>
                  <span className="kr-bold-14">{item.degree}</span>
                  <span>|</span>
                  <span className="kr-medium-14">{item.enrollmentStatus}</span>
                </div>
                <div className="kr-medium-14 flex items-center gap-1 text-gray-400">
                  <span>학점: {item.grade}</span>
                </div>
                <div className="kr-regular-14 mb-8 mt-3">{item.description}</div>
              </td>
              <td>
                <button className="absolute right-0 top-0 w-fit">편집하기</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
