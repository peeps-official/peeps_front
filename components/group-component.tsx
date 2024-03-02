import type { NextPage } from "next";

const GroupComponent: NextPage = () => {
  return (
    <div className="w-[254px] rounded-8xs bg-white flex flex-col items-center justify-start pt-[13px] px-[13px] pb-[273px] box-border gap-[225px] text-left text-xs text-gray-100 font-lato mq450:gap-[225px] mq825:pt-5 mq825:pb-[177px] mq825:box-border">
      <div className="w-[254px] h-[868px] relative rounded-8xs bg-white hidden" />
      <div className="self-stretch flex flex-col items-end justify-start py-0 px-[5px] gap-[8px_0px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[5px] text-mini text-black font-inter">
          <b className="h-[25px] flex-1 relative flex items-center z-[1]">
            전체 인기 글
          </b>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[9px] gap-[17px_0px]">
          <div className="self-stretch h-[49px] flex flex-col items-end justify-start gap-[9px_0px]">
            <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
            <div className="flex flex-col items-start justify-start gap-[6px_0px]">
              <div className="w-[190px] flex flex-row items-start justify-between gap-[20px]">
                <div className="relative font-extrabold z-[1]">한경이</div>
                <div className="rounded-10xs bg-gray-300 flex flex-row items-center justify-center py-0 pr-0 pl-0.5 z-[1] text-center text-3xs text-gray-200 font-inter">
                  <div className="flex flex-col items-start justify-start py-0 px-0">
                    <div className="relative leading-[20px] whitespace-nowrap">
                      한경대학교, 24학번
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[212px] relative text-4xs leading-[142%] text-black inline-block z-[1]">
                처음에는 마음이 금방 산만해지고, 효과가 없는 것 ...
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[6px_0px]">
            <div className="w-[190px] flex flex-row items-start justify-between gap-[20px]">
              <div className="relative font-extrabold z-[1]">두경이</div>
              <div className="rounded-10xs bg-gray-300 flex flex-row items-center justify-center py-0 pr-0 pl-0.5 z-[1] text-center text-3xs text-gray-200 font-inter">
                <div className="flex flex-col items-start justify-start py-0 px-0">
                  <div className="relative leading-[20px] whitespace-nowrap">
                    한경대학교, 24학번
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[212px] h-3.5 relative text-4xs leading-[142%] text-black inline-block shrink-0 z-[1]">
              처음에는 마음이 금방 산만해지고, 효과가 없는 것 ...
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[6px_0px]">
          <div className="w-[190px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative font-extrabold z-[1]">세경이</div>
            <div className="rounded-10xs bg-gray-300 flex flex-row items-center justify-center py-0 pr-0 pl-0.5 z-[1] text-center text-3xs text-gray-200 font-inter">
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <div className="relative leading-[20px] whitespace-nowrap">
                  한경대학교, 24학번
                </div>
              </div>
            </div>
          </div>
          <div className="w-[212px] relative text-4xs leading-[142%] text-black inline-block z-[1]">
            처음에는 마음이 금방 산만해지고, 효과가 없는 것 ...
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[5px] gap-[20px_0px] text-mini text-black font-inter">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
          <div className="w-[210px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
            <b className="h-[25px] flex-1 relative flex items-center z-[1]">
              핫한 인증 태그
            </b>
          </div>
          <div className="self-stretch h-[5px] flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border">
            <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
          </div>
          <div className="w-[133px] flex flex-row items-start justify-start py-0 px-1.5 box-border text-sm font-small-m">
            <div className="flex-1 flex flex-col items-start justify-start gap-[3px_0px]">
              <div className="flex flex-row items-center justify-start gap-[0px_8px]">
                <img
                  className="h-5 w-5 relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-10@2x.png"
                />
                <div className="relative tracking-[-0.01em] leading-[24px] font-medium z-[1]">
                  비트코인
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[23px] text-center text-xs text-gray-200 font-inter">
                <div className="flex-1 flex flex-row items-start justify-start gap-[0px_3px]">
                  <div className="w-[23px] rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
                    <div className="relative leading-[20px]">1개</div>
                  </div>
                  <div className="flex-1 rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
                    <div className="relative leading-[20px]">10개</div>
                  </div>
                  <div className="flex-1 rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
                    <div className="relative leading-[20px]">100개</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[154px] flex flex-row items-start justify-start py-0 px-[5px] box-border text-sm font-small-m">
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px_0px]">
            <div className="flex flex-row items-center justify-start gap-[0px_8px]">
              <img
                className="h-5 w-5 relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <div className="relative tracking-[-0.01em] leading-[24px] font-medium z-[1]">
                수능
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5 text-center text-xs text-gray-200 font-inter">
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[0px_3px]">
                <div className="flex-1 rounded-10xs bg-gray-300 flex flex-row items-center justify-center py-0 pr-0 pl-[3px] whitespace-nowrap z-[1]">
                  <div className="flex-1 relative leading-[20px]">
                    백분위 98
                  </div>
                </div>
                <div className="rounded-10xs bg-gray-300 flex flex-row items-center justify-center py-0 pr-0 pl-[3px] z-[1]">
                  <div className="flex flex-col items-start justify-start py-0 px-0">
                    <div className="relative leading-[20px] whitespace-nowrap">
                      국어 5등급
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
