import type { NextPage } from "next";

export type feedType = {
  name :string;
  property :string[];
  text :string;
};

export type TagType = {
  name :string;
  image :string;
  property :string[];
};

const Tag: NextPage<TagType> = ({name, image, property}) =>{
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
        {property.map((a, i)=>{
          return(
            <div className={tag} key={i}> {a} </div>
          )
        })}
      </div>
    </div>
  </div>
  );
}

const Feed: NextPage<feedType> = ({ name, property, text }) => {
  let tag = "w-fit rounded-10xs bg-gray-300 items-center"
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="flex flex-row justify-between">
        <div className="font-extrabold">{name}</div>
        <div className="h-4 rounded-10xs bg-gray-300 flex flex-row text-xs text-gray-200 flex-wrap gap-[6px]">
          {property.map((a, i) => {
            return (
              <div className={tag} key={i}> {a} </div>
            )
          })}
        </div>
      </div>
      <div className="pb-4 w-[212px] relative text-3xs leading-[142%] text-black inline-block z-[1]">
        {text}
      </div>
    </div>
  );
}

export default function HotFeed() {
  return (
    <div className="w-[254px] rounded-8xs bg-white flex flex-col items-center justify-start pt-[13px] pb-[273px] pr-4 pl-[17px] box-border gap-[5px] text-left text-sm text-black font-inter mq825:pt-5 mq825:pb-[177px] mq825:box-border">
      
      
      <div className="self-stretch flex flex-col items-end justify-start py-0 px-[5px] gap-[8px] pb-10">

        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-[5px] text-mini">
          <b className="h-[25px] flex-1 relative flex items-center z-[1]">
            전체 인기 글
          </b>
        </div>
        <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-px pb-[9px] box-border">
          <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
        </div>

        <Feed name="한경이" property={["한경대학교", "24학번"]} text="처음에는 마음이 금방 산만해지고, 효과가 ..."/>
        <Feed name="두경이" property={["한경대학교", "24학번"]} text="처음에는 마음이 금방 산만해지고, 효과가 ..."/>
        <Feed name="세경이" property={["한경대학교", "24학번"]} text="처음에는 마음이 금방 산만해지고, 효과가 ..."/>
        
      </div>

      
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-[5px] text-mini pt-20">
        <b className="h-[25px] flex-1 relative flex items-center z-[1]">
          핫한 뱃지
        </b>
      </div>
      <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-px pb-[9px] box-border">
        <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
      </div>
      <Tag name="비트코인" image="/bitcoin.png" property={["1개","10개","100개"]} />
      <Tag name="수능" image="/hknu.png" property={["백분위98","국어5등급"]} />
    </div>
  );
};
