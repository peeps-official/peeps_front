import { useQuery } from '@tanstack/react-query'
import BoxItemWrapper from '../../Feed/BoxItemWrapper'
import { getOwnerEducation } from '@/src/common/api/user'
import { usePathname } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import { useState } from 'react'
import AddEducationModal from '../../InfoEdit/Education/AddEducationModal'
import { axiosWithAuth } from '@/src/common/api/instance'
import { OwnerEducation_T } from '@/src/common/types/owner'

export default function Education() {
  const user_seq_with_slash = usePathname()
  const user_seq = user_seq_with_slash.slice(1)

  const { isSuccess, error, data } = useQuery({
    queryKey: ['education', user_seq],
    queryFn: () => getOwnerEducation(user_seq),
  })

  return <BoxItemWrapper title="교육">{isSuccess && <HistoryBox items={data} />}</BoxItemWrapper>
}

type HistoryBoxProps = {
  items: OwnerEducation_T[]
}

function HistoryBox({ items }: HistoryBoxProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const user_seq_with_slash = usePathname()
  const user_seq = user_seq_with_slash.slice(1)

  const isOwner = useRecoilValue(IsOwnerAtom)

  return (
    <>
      <table className="w-full table-auto">
        <tbody>
          {items.map((item: OwnerEducation_T) => {
            const startDate = item.startDate.split('-')[0]
            const endDate = item.endDate.split('-')[0]

            return (
              <tr key={item.id} className="relative">
                <td className="w-[168px] p-2">
                  <div className="kr-bold-18 mb-1">{item.school}</div>
                  <div className="kr-medium-12 text-gray-400">
                    {startDate}{' '}
                    {startDate === endDate ? '' : ' ~ ' + (endDate === '' ? item.enrollmentStatus : endDate)}
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
                    {item.grade > 0 && <span>학점: {item.grade}</span>}
                  </div>
                  <div className="kr-regular-14 mb-8 mt-3">{item.description}</div>
                </td>
                {isOwner && (
                  <td className="absolute right-0 top-0 flex gap-2">
                    <button className="w-fit" onClick={() => setIsModalOpen(true)}>
                      수정
                    </button>
                    <button
                      className="w-fit"
                      onClick={async () => {
                        const isDelete = confirm('정말 삭제하시겠습니까?')
                        if (isDelete) {
                          const { data, status } = await axiosWithAuth.delete(`/${user_seq}/degree/${item.id}`)
                          if (status === 200) {
                            alert('정상적으로 삭제되었습니다.')
                          }
                        }
                      }}
                    >
                      삭제
                    </button>
                    {isModalOpen && <AddEducationModal defaultData={item} type="edit" setIsOpen={setIsModalOpen} />}
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
