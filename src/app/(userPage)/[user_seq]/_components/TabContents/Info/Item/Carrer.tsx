import BoxItemWrapper from '../../Feed/BoxItemWrapper'

export default function Carrer() {
  return (
    <BoxItemWrapper title="경력">
      <CarrerBox />
    </BoxItemWrapper>
  )
}

function CarrerBox() {
  const items = [
    {
      id: 0,
      company: '주식회사',
      teamName: '기획팀',
      jobRole: '인턴',
      jobTitle: '프론트엔드 개발자',
      jobType: '정규직',
      startDate: '2023-07-01',
      endDate: '2023-09-02',
      isCurrently: true,
      description: '프론트엔드 개발자로서 프로젝트를 진행하였습니다.',
    },
    {
      id: 1,
      company: '토스',
      teamName: '뱅크 사일로',
      jobRole: '팀원',
      jobTitle: '프론트엔드 개발자',
      jobType: '정규직',
      startDate: '2023-07-01',
      endDate: '2023-09-02',
      isCurrently: false,
      description: '프론트엔드 개발자로서 프로젝트를 진행하였습니다.',
    },
  ]
  return (
    <div className="flex flex-col gap-[23px]">
      <table className="w-full table-auto">
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="w-[168px] p-2">
                <div className="kr-bold-18 mb-1">{item.company}</div>
                <div className="kr-medium-12 text-gray-400">
                  {item.startDate.split('-')[0]} ~ {item.isCurrently ? '현재' : item.endDate.split('-')[0]}
                </div>
              </td>
              <td className="p-2 align-top">
                <div className="flex items-center gap-1">
                  <span className="kr-bold-14">{item.teamName}</span>
                  <span>·</span>
                  <span className="kr-bold-14">{item.jobTitle}</span>
                </div>
                <div className="kr-medium-14 flex items-center gap-1 text-gray-400">
                  <span>{item.jobRole}</span>
                  <span>|</span>
                  <span className="kr-medium-14">{item.jobType}</span>
                </div>
                <div className="kr-regular-14 mb-8 mt-3">{item.description}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
