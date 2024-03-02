import type { NextPage } from "next";
import FrameComponent from "./frame-component";

const GroupComponent1: NextPage = () => {
  return (
    <div className="w-[254px] rounded-8xs bg-white flex flex-col items-center justify-start pt-[13px] pb-[273px] pr-4 pl-[17px] box-border gap-[6px] text-left text-sm text-black font-inter mq825:pt-5 mq825:pb-[177px] mq825:box-border">
      <div className="w-[254px] h-[868px] relative rounded-8xs bg-white hidden" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-[5px] text-mini">
        <b className="h-[25px] flex-1 relative flex items-center z-[1]">
          인증 태그
        </b>
      </div>
      <div className="self-stretch h-[9px] flex flex-row items-start justify-start pt-0 px-px pb-[9px] box-border">
        <div className="h-px flex-1 relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-4 pr-[26px] pl-px text-center text-xs text-gray-200">
        <div className="flex-1 flex flex-col items-start justify-start gap-[5px_0px]">
          <div className="w-[115px] flex flex-row items-center justify-start gap-[0px_8px] text-left text-sm text-black">
            <img
              className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
            <div className="flex-1 relative leading-[20px] font-medium z-[1]">
              한경대학교
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-7">
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_5px]">
              <div className="w-[43px] rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
                <div className="relative leading-[20px]">24학번</div>
              </div>
              <div className="w-10 rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
                <div className="relative leading-[20px]">재학생</div>
              </div>
              <div className="flex-1 rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1] text-2xs">
                <div className="w-[67px] relative leading-[20px] inline-block">
                  컴퓨터공학과
                </div>
              </div>
            </div>
          </div>
          <div className="w-[92px] flex flex-row items-start justify-start py-0 px-7 box-border">
            <div className="flex-1 rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
              <div className="relative leading-[20px]">4년제</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-px pb-[17px]">
        <div className="w-[130px] flex flex-col items-center justify-start gap-[6px_0px]">
          <div className="self-stretch flex flex-row items-end justify-start gap-[0px_8px]">
            <img
              className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
            <div className="flex-1 relative leading-[20px] font-medium z-[1]">
              인스타그램
            </div>
          </div>
          <div className="w-[114px] flex flex-row items-start justify-start py-0 pr-[23px] pl-5 box-border text-center text-xs text-gray-200">
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_5px]">
              <div className="rounded-10xs bg-gray-300 flex flex-row items-center justify-center py-0 pr-0 pl-[3px] z-[1]">
                <div className="flex flex-col items-start justify-start py-0 px-0">
                  <div className="relative leading-[20px]">{`10k `}</div>
                </div>
              </div>
              <div className="flex-1 rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
                <div className="relative leading-[20px]">비공개</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[11px] px-0">
        <div className="w-[131px] flex flex-col items-start justify-start gap-[4px_0px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[0px_7px]">
            <img
              className="h-[22px] w-[22px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-8@2x.png"
            />
            <div className="flex-1 relative leading-[20px] font-medium z-[1]">
              정보처리기사
            </div>
          </div>
          <div className="w-[90px] flex flex-row items-start justify-start py-0 px-[29px] box-border text-center text-xs text-gray-200">
            <div className="flex-1 rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
              <div className="relative leading-[20px]">24년</div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent
        image9="/image-8@2x.png"
        prop="웹디자인기능사"
        prop1="24년"
      />
      <FrameComponent
        image9="/image-10@2x.png"
        prop="비트코인"
        prop1="100개"
        propMinHeight="20px"
        propWidth="94px"
      />
      <div className="self-stretch h-[42px] flex flex-col items-start justify-start pt-0 px-px pb-[9px] box-border gap-[8px_0px] text-mini">
        <div className="w-52 flex flex-row items-start justify-start py-0 px-1 box-border">
          <b className="h-[25px] flex-1 relative flex items-center z-[1]">
            커뮤니티
          </b>
        </div>
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
      </div>
      <div className="flex flex-row items-start justify-start pt-0 pb-4 pr-[5px] pl-0.5 text-smi">
        <div className="flex flex-row items-start justify-start gap-[0px_8px]">
          <img
            className="h-5 w-5 relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[5px_0px]">
            <div className="w-[186px] relative leading-[20px] font-medium inline-block z-[1]">
              비트코인 10개 이상 소유자 모임
            </div>
            <div className="w-[82px] rounded-10xs bg-gray-300 flex flex-row items-center justify-center whitespace-nowrap z-[1] text-center text-xs text-gray-200">
              <div className="relative leading-[20px]">비트코인, 10개</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_8px] text-smi">
        <img
          className="h-5 w-5 relative object-cover min-h-[20px] z-[1]"
          loading="lazy"
          alt=""
          src="/image-6@2x.png"
        />
        <div className="w-48 relative leading-[20px] font-medium flex items-center z-[1]">
          한경대학교 24학번 컴퓨터공학...
        </div>
      </div>
      <div className="w-[203px] flex flex-row items-start justify-start py-0 pr-5 pl-[15px] box-border text-center text-xs text-gray-200">
        <div className="w-[121px] flex flex-row items-start justify-start gap-[0px_5px]">
          <div className="w-[43px] rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
            <div className="relative leading-[20px]">24학번</div>
          </div>
          <div className="flex-1 rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1] text-2xs">
            <div className="w-[67px] relative leading-[20px] inline-block">
              컴퓨터공학과
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
