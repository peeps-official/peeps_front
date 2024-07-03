import { Badge } from './Badge'

export default function TagCommunity() {
  let tag = 'w-fit rounded-10xs bg-gray-300 items-center'
  return (
    <div className="w-[254px] rounded-8xs bg-white flex flex-col items-center pt-[13px] pb-[273px] pr-4 pl-[17px] box-border gap-[5px] text-left text-sm text-black  ">
      <div className="self-stretch flex py-0 pr-4 pl-[5px] text-mini">
        <b className="h-[25px] flex-1 relative flex items-center ">
          팔로우한 뱃지
        </b>
      </div>
      <div className="self-stretch h-[9px] flex pt-0 px-px pb-[9px] box-border">
        <div className="h-px flex-1 relative box-border  border-t-[1px] border-solid border-whitesmoke-100" />
      </div>
      <Badge
        name="한경대학교"
        image="/images/hknu.png"
        property={['24학번', '재학생', '컴퓨터공학과', '4년제']}
      />
      <Badge
        name="인스타그램"
        image="/images/instagram.png"
        property={['10k', '비공개']}
      />
      <Badge name="정보처리기사" image="/images/HRDK.png" property={['24년']} />
      <Badge
        name="웹디자인기능사"
        image="/images/HRDK.png"
        property={['24년']}
      />
      <Badge name="비트코인" image="/images/bitcoin.png" property={['100개']} />

      <div className="self-stretch flex py-0 pr-4 pl-[5px] text-mini pt-10">
        <b className="h-[25px] flex-1 relative flex items-center ">
          가입한 클럽
        </b>
      </div>
      <div className="self-stretch h-[9px] flex pt-0 px-px pb-[9px] box-border">
        <div className="h-px flex-1 relative box-border  border-t-[1px] border-solid border-whitesmoke-100" />
      </div>
      <Badge
        name="비트코인 10개이상 소유자 모임"
        image="/images/bitcoin.png"
        property={['비트코인', '10개']}
      />
      <Badge
        name="한경대학교 24학번 컴퓨터공학과 모임"
        image="/images/hknu.png"
        property={['24학번', '컴퓨터공학과']}
      />
    </div>
  )
}
