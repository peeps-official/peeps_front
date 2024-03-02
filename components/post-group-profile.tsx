import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PostGroupProfileType = {
  ellipse14?: string;
  prop?: string;
  ellipseShape?: string;
  prop1?: string;
  prop2?: string;
  ellipse141?: string;
  prop3?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
  propRight?: CSSProperties["right"];
  propLeft1?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propLeft2?: CSSProperties["left"];
  propWidth1?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
  propLeft3?: CSSProperties["left"];
  propWidth2?: CSSProperties["width"];
};

const PostGroupProfile: NextPage<PostGroupProfileType> = ({
  ellipse14,
  prop,
  ellipseShape,
  prop1,
  prop2,
  ellipse141,
  prop3,
  propAlignSelf,
  propGap,
  propFlex,
  propMinWidth,
  propWidth,
  propLeft,
  propRight,
  propLeft1,
  propPadding,
  propLeft2,
  propWidth1,
  propPadding1,
  propLeft3,
  propWidth2,
}) => {
  const postGroupProfileStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propGap, propFlex, propMinWidth]);

  const ellipseIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      left: propLeft,
    };
  }, [propWidth, propLeft]);

  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft1,
    };
  }, [propRight, propLeft1]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth1,
    };
  }, [propLeft2, propWidth1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft3,
      width: propWidth2,
    };
  }, [propLeft3, propWidth2]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[27px_0px] max-w-full text-left text-sm text-black font-small-m"
      style={postGroupProfileStyle}
    >
      <div className="self-stretch h-[70px] relative">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-white box-border border-[1px] border-solid border-whitesmoke-300" />
        <img
          className="absolute h-[42.86%] w-[5.09%] top-[28.57%] right-[92.03%] bottom-[28.57%] left-[2.89%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src={ellipse14}
          style={ellipseIconStyle}
        />
        <div
          className="absolute h-[57.14%] w-[86.44%] top-[21.43%] right-[2.89%] bottom-[21.43%] left-[10.67%] rounded-8xs bg-whitesmoke-300 z-[1]"
          style={inputFieldStyle}
        />
      </div>
      <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1),_0px_0px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-[15px] pr-[13px] pl-3.5 box-border relative gap-[7px_0px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between pt-0 pb-px pr-0.5 pl-0 gap-[20px] text-xs text-gray-100">
          <div className="w-[122px] flex flex-col items-end justify-start pt-0 px-0 pb-[26px] box-border">
            <div
              className="flex flex-col items-start justify-start py-0 pr-0 pl-5 relative"
              style={frameDivStyle}
            >
              <b className="relative text-base tracking-[-0.01em] leading-[24px]">
                엄현준
              </b>
              <div className="relative leading-[16px] text-dimgray-100 whitespace-nowrap">
                02.02 8:30 PM
              </div>
              <div
                className="!m-[0] absolute bottom-[-27px] left-[-24px] flex flex-col items-start justify-start gap-[8px_0px] w-full z-[1] text-center text-gray-200 font-inter"
                style={frameDiv1Style}
              >
                <img
                  className="w-[36.2px] h-9 relative rounded-41xl object-cover"
                  loading="lazy"
                  alt=""
                  src={prop}
                />
                <div className="rounded-10xs bg-gray-300 flex flex-row items-center justify-center">
                  <div className="flex flex-col items-start justify-start py-0 px-0">
                    <div className="relative leading-[20px] whitespace-nowrap">
                      한경대학교, 24학번
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-6 w-[24.1px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/morehorizontal.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start shrink-0">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[6px_0px] shrink-0">
            <div className="w-[554px] relative tracking-[-0.01em] leading-[24px] inline-block">
              처음에는 마음이 금방 산만해지고, 효과가 없는 것 같았지만, 시간이
              흐를수록 명상을 통해 내면의 평화와 조화를 찾을 수 있었습니다. 그
              작은 변화가 내 삶에 큰 영향을 미치기 시작했고, 스트레스와 불안이
              줄어 처음에는 마음이 금방 산만해지고, 효과가 없는 것 같았지만,
              시간이 흐를수록 명상을 통해 내면의 평화와 조화를 찾을 수
              있었습니다. 그 작은 변화가 내 삶에 큰 영향을 미치기 시작했고,
              스트레스와 불안이 줄어 처음에는 마음이 금방 산만해지고, 효과가
              없는 것 같았지만, 시간이 흐를수록 명상을 통해 내면의 평화와 조화를
              찾을 수 있었습니다. 그 작은 변화가 내 삶에 큰 영향을 미치기
              시작했고, 스트레스와 불안이 줄어 처음에는 마음이 금방 산만해지고,
              효과가 없는 것 같았지만...
            </div>
            <b className="relative tracking-[-0.01em] leading-[24px]">더보기</b>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[462px] gap-[0px_19px] text-mini font-lato mq450:pl-5 mq450:box-border mq675:flex-wrap mq675:pl-[231px] mq675:box-border">
          <div className="flex flex-row items-start justify-start gap-[3px]">
            <img
              className="h-[21px] w-5 relative overflow-hidden shrink-0 min-h-[21px]"
              loading="lazy"
              alt=""
              src="/messagesquare.svg"
            />
            <div className="relative leading-[20px]">1</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[3px]">
            <img
              className="h-[21px] w-5 relative overflow-hidden shrink-0 min-h-[21px]"
              loading="lazy"
              alt=""
              src="/heart.svg"
            />
            <div className="relative leading-[20px]">2</div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray" />
        <img
          className="w-[30px] h-[30px] absolute !m-[0] bottom-[16px] left-[17px] rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src={ellipseShape}
        />
        <div className="self-stretch h-8 flex flex-row items-center justify-start py-0 pr-0 pl-[42px] box-border max-w-full z-[1] text-dimgray-200">
          <div className="self-stretch w-[511.9px] relative rounded-11xl bg-whitesmoke-200 max-w-full" />
          <div className="relative tracking-[-0.01em] leading-[24px] z-[1] ml-[-491px]">
            댓글을 입력하세요...
          </div>
          <img
            className="h-[31px] w-[35.3px] relative rounded-[50%] object-cover hidden z-[3]"
            alt=""
            src={prop1}
          />
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1),_0px_0px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-[15px] pr-[13px] pl-3.5 box-border relative gap-[7px_0px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between pt-0 pb-px pr-0.5 pl-0 gap-[20px] text-xs text-gray-100">
          <div className="w-[122px] flex flex-col items-end justify-start pt-0 px-0 pb-[26px] box-border">
            <div
              className="flex flex-col items-start justify-start py-0 pr-0 pl-5 relative"
              style={frameDiv2Style}
            >
              <b className="relative text-base tracking-[-0.01em] leading-[24px]">
                엄현준
              </b>
              <div className="relative leading-[16px] text-dimgray-100 whitespace-nowrap">
                02.02 8:30 PM
              </div>
              <div
                className="!m-[0] absolute bottom-[-27px] left-[-24px] flex flex-col items-start justify-start gap-[8px_0px] w-full z-[1] text-center text-gray-200 font-inter"
                style={frameDiv3Style}
              >
                <img
                  className="w-[36.2px] h-9 relative rounded-41xl object-cover"
                  loading="lazy"
                  alt=""
                  src={prop2}
                />
                <div className="rounded-10xs bg-gray-300 flex flex-row items-center justify-center">
                  <div className="flex flex-col items-start justify-start py-0 px-0">
                    <div className="relative leading-[20px] whitespace-nowrap">
                      한경대학교, 24학번
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-6 w-[24.1px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/morehorizontal.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start shrink-0">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[6px_0px] shrink-0">
            <div className="w-[554px] h-[167px] relative tracking-[-0.01em] leading-[24px] inline-block shrink-0">
              처음에는 마음이 금방 산만해지고, 효과가 없는 것 같았지만, 시간이
              흐를수록 명상을 통해 내면의 평화와 조화를 찾을 수 있었습니다. 그
              작은 변화가 내 삶에 큰 영향을 미치기 시작했고, 스트레스와 불안이
              줄어 처음에는 마음이 금방 산만해지고, 효과가 없는 것 같았지만,
              시간이 흐를수록 명상을 통해 내면의 평화와 조화를 찾을 수
              있었습니다. 그 작은 변화가 내 삶에 큰 영향을 미치기 시작했고,
              스트레스와 불안이 줄어 처음에는 마음이 금방 산만해지고, 효과가
              없는 것 같았지만, 시간이 흐를수록 명상을 통해 내면의 평화와 조화를
              찾을 수 있었습니다. 그 작은 변화가 내 삶에 큰 영향을 미치기
              시작했고, 스트레스와 불안이 줄어 처음에는 마음이 금방 산만해지고,
              효과가 없는 것 같았지만...
            </div>
            <b className="relative tracking-[-0.01em] leading-[24px]">더보기</b>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[462px] gap-[0px_19px] text-mini font-lato mq450:pl-5 mq450:box-border mq675:flex-wrap mq675:pl-[231px] mq675:box-border">
          <div className="flex flex-row items-start justify-start gap-[3px]">
            <img
              className="h-[21px] w-5 relative overflow-hidden shrink-0 min-h-[21px]"
              alt=""
              src="/messagesquare.svg"
            />
            <div className="relative leading-[20px]">1</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[3px]">
            <img
              className="h-[21px] w-5 relative overflow-hidden shrink-0 min-h-[21px]"
              alt=""
              src="/heart.svg"
            />
            <div className="relative leading-[20px]">2</div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-lightgray" />
        <img
          className="w-[30px] h-[30px] absolute !m-[0] bottom-[16px] left-[17px] rounded-[50%] object-cover"
          alt=""
          src={ellipse141}
        />
        <div className="self-stretch h-8 flex flex-row items-center justify-start py-0 pr-0 pl-[42px] box-border max-w-full z-[1] text-dimgray-200">
          <div className="self-stretch w-[511.9px] relative rounded-11xl bg-whitesmoke-200 max-w-full" />
          <div className="relative tracking-[-0.01em] leading-[24px] z-[1] ml-[-491px]">
            댓글을 입력하세요...
          </div>
          <img
            className="h-[31px] w-[35.3px] relative rounded-[50%] object-cover hidden z-[3]"
            alt=""
            src={prop3}
          />
        </div>
      </div>
    </div>
  );
};

export default PostGroupProfile;
