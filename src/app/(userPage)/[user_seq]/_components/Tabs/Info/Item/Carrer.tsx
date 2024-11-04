import BoxItemWrapper from '../../Feed/BoxItemWrapper'
import { usePathname } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getOwnerCareer } from '@/src/common/api/user'
import { useRecoilValue } from 'recoil'
import { IsOwnerAtom } from '@/src/common/recoil/userHome'
import { useState } from 'react'
import AddCareerModal from '../../InfoEdit/Career/AddCareerModal'
import { axiosWithAuth } from '@/src/common/api/instance'
import { OwnerCareer_T } from '@/src/common/types/owner'

export default function Carrer() {
  const user_seq_with_slash = usePathname()
  const user_seq = user_seq_with_slash.slice(1)

  const { isSuccess, error, data } = useQuery({
    queryKey: ['carrer', user_seq],
    queryFn: () => getOwnerCareer(user_seq),
  })

  return <BoxItemWrapper title="경력">{isSuccess && <CarrerBox items={data} />}</BoxItemWrapper>
}

type CarrerBoxProps = {
  items: OwnerCareer_T[]
}

function CarrerBox({ items }: CarrerBoxProps) {
  const user_seq_with_slash = usePathname()
  const user_seq = user_seq_with_slash.slice(1)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const isOwner = useRecoilValue(IsOwnerAtom)

  return (
    <div className="flex flex-col gap-[23px]">
      <table className="w-full table-auto">
        <tbody>
          {items.map((item: OwnerCareer_T) => {
            const startDate = item.startDate.split('-')[0]
            const endDate = item.endDate.split('-')[0]

            return (
              <tr key={item.id} className="relative">
                <td className="w-[168px] p-2">
                  <div className="kr-bold-18 mb-1">{item.company}</div>
                  <div className="kr-medium-12 text-gray-400">
                    {startDate} {startDate === endDate ? '' : ' ~ ' + (item.isCurrently ? '현재' : endDate)}
                  </div>
                </td>
                <td className="p-2 align-top">
                  <div className="flex items-center gap-1">
                    <span className="kr-bold-14">{item.teamName}</span>
                    {item.jobTitle && (
                      <>
                        <span>·</span>
                        <span className="kr-bold-14">{item.jobTitle}</span>
                      </>
                    )}
                  </div>
                  <div className="kr-medium-14 flex items-center gap-1 text-gray-400">
                    <span>{item.jobRole}</span>
                    {item.jobType && (
                      <>
                        <span>|</span>
                        <span className="kr-medium-14">{item.jobType}</span>
                      </>
                    )}
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
                          const { data, status } = await axiosWithAuth.delete(`/${user_seq}/career/${item.id}`)
                          if (status === 200) {
                            alert('정상적으로 삭제되었습니다.')
                          }
                        }
                      }}
                    >
                      삭제
                    </button>
                    {isModalOpen && <AddCareerModal defaultData={item} type="edit" setIsOpen={setIsModalOpen} />}
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
