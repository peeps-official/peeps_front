import BoxItemWrapper from '../../Feed/BoxItemWrapper'

export default function Education() {
  return (
    <BoxItemWrapper title="교육">
      <HistoryBox />
    </BoxItemWrapper>
  )
}

function HistoryBox() {
  return (
    <>
      <div className="flex w-[368px] flex-col gap-[23px]">
        <RenderSection
          items={[
            {
              id: 1,
              school: '구현고등학교',
              major: '이과',
              degree: '고등학교',
              startDate: '2018-01-01',
              endDate: '2021-01-01',
              grade: 4.3,
              enrollmentStatus: '졸업',
              description: '사물놀이 - 울림',
            },
            {
              id: 0,
              school: '한경대학교',
              major: '컴퓨터공학과',
              degree: '학사',
              startDate: '2021-01-01',
              endDate: '2023-01-01',
              grade: 4.3,
              enrollmentStatus: '졸업',
              description: '사물놀이 - 돋을볕',
            },
          ]}
        />
      </div>
    </>
  )
}

type SectionProps = {
  items: {
    id: number
    school: string
    major: string
    degree: string
    startDate: string
    endDate: string
    grade: number
    enrollmentStatus: string
    description: string
  }[]
}

function RenderSection({ items }: SectionProps) {
  return (
    <table className="table-auto">
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="">
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
          </tr>
        ))}
      </tbody>
    </table>
  )
}
