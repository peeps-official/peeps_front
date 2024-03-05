import type { NextPage } from "next";

export type TagType = {
  name: string;
  image: string;
  property: string[];
};

const Tag: NextPage<TagType> = ({ name, image, property }) => {
  let tag = "w-fit rounded-10xs bg-gray-300 items-center"
  return (
    <div className="self-stretch flex flex-row pb-4 pr-[26px] text-xs text-gray-200">
      <div className="flex flex-col gap-[5px]">
        {/* 이름 */}
        <div className="flex flex-row gap-[8px] text-left text-sm text-black">
          <img className="h-5 w-5 object-cover min-h-[20px]" src={image} />
          <div> {name} </div>
        </div>
        {/* 태그 */}
        <div className="pl-7 flex-1 flex flex-row flex-wrap gap-[6px]">
          {property.map((a, i) => {
            return (
              <div className={tag} key={i}> {a} </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default function TagCommunity() {
  let tag = "w-fit rounded-10xs bg-gray-300 items-center"
  return (
    <div className="w-[254px] rounded-8xs bg-white flex flex-col items-center justify-start pt-[13px] pb-[273px] pr-4 pl-[17px] box-border gap-[5px] text-left text-sm text-black font-inter mq825:pt-5 mq825:pb-[177px] mq825:box-border">
    
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-[5px] text-mini">
        <b className="h-[25px] flex-1 relative flex items-center z-[1]">
          구독한 뱃지
        </b>
      </div>
      <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-px pb-[9px] box-border">
        <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
      </div>
      <Tag name="한경대학교" image="/hknu.png" property={["24학번", "재학생", "컴퓨터공학과", "4년제"]} />
      <Tag name="인스타그램" image="/instagram.png" property={["10k", "비공개"]} />
      <Tag name="정보처리기사" image="/HRDK.png" property={["24년"]} />
      <Tag name="웹디자인기능사" image="/HRDK.png" property={["24년"]} />
      <Tag name="비트코인" image="/bitcoin.png" property={["100개"]} />

      
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-[5px] text-mini pt-10">
        <b className="h-[25px] flex-1 relative flex items-center z-[1]">
          가입한 클럽
        </b>
      </div>
      <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-px pb-[9px] box-border">
        <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
      </div>
      <Tag name="비트코인 10개이상 소유자 모임" image="/bitcoin.png" property={["비트코인", "10개"]} />
      <Tag name="한경대학교 24학번 컴퓨터공학과 모임" image="/hknu.png" property={["24학번", "컴퓨터공학과"]} />
    </div>
  );
};
