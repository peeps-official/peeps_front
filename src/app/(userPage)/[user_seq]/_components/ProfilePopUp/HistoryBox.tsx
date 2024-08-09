export default function HistoryBox() {
  // 공통 컴포넌트 렌더링 함수
  const renderSection = (title, items, key) => (
    <>
      <div className="text-left kr-bold-14">{title}</div>
      {items.map((item) => (
        <div key={key(item)} className="flex flex-start gap-[32px] pb-[24px]">
          <div className="h-[14px] w-[93px] flex items-center flex-start kr-normal-13 text-[#666]">
            {/* Dot 컴포넌트 조건부 렌더링 */}
            {item.hasDot && <Dot />}
            <div className="w-[83px] text-left">
              {item.dateStart} -{item.dateEnd ? item.dateEnd : '진행 중'}
            </div>
          </div>
          <div className="text-left kr-normal-14">
            <div className="mb-[15px]">{item.title}</div>
            {item.subEx.map((sub, index) => (
              <div key={index} className="text-[#666]">
                {sub}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )

  return (
    <>
      <div className="flex flex-col gap-[23px] w-[368px]">
        {renderSection('학력', data.educate, (item) => item.title)}

        {renderSection('이력', data.career, (item) => item.title)}
      </div>
    </>
  )
}
