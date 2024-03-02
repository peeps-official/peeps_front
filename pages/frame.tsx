import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/frame-component1";
import PostGroupProfile from "../components/post-group-profile";

const Frame: NextPage = () => {
  const router = useRouter();

  const onFollowingButtonIconClick = useCallback(() => {
    router.push("/frame");
  }, [router]);

  return (
    <div className="w-full h-[768px] relative bg-background-gray overflow-hidden flex flex-col items-start justify-start gap-[24px_0px] tracking-[normal] text-left text-xl text-black font-inter mq825:h-auto">
      <div className="self-stretch bg-white flex flex-col items-center justify-start pt-[7px] px-0 pb-0 box-border relative gap-[9px_0px] max-w-full shrink-0">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[-0.9px] bg-white" />
        <div className="w-[1144px] flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] mq825:flex-wrap">
            <div className="w-[130px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <h3 className="m-0 w-[89px] relative text-inherit leading-[20px] font-bold font-inherit flex items-center box-border pr-5 z-[1] mq450:text-base mq450:leading-[16px]">
                PEEPS
              </h3>
            </div>
            <div className="w-[548px] flex flex-row items-center justify-start pt-1.5 pb-[5px] pr-[22px] pl-2 box-border relative max-w-full z-[1] text-smi text-silver font-small-m">
              <div className="h-full w-full absolute !m-[0] top-[0.5px] right-[0px] bottom-[-0.5px] left-[0px] rounded-3xs bg-whitesmoke-300" />
              <div className="flex-1 flex flex-row items-center justify-start gap-[0px_6px] max-w-full z-[1]">
                <img
                  className="h-[22px] w-[22px] relative min-h-[22px]"
                  alt=""
                  src="/search.svg"
                />
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px] font-medium inline-block max-w-[calc(100%_-_28px)]">
                  커뮤니티 검색해보기
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0px_10px] z-[1]">
              <img
                className="h-10 w-10 relative object-cover min-h-[40px]"
                loading="lazy"
                alt=""
                src="/message@2x.png"
              />
              <img
                className="h-10 w-10 relative min-h-[40px]"
                loading="lazy"
                alt=""
                src="/alarmselected3.svg"
              />
              <img
                className="h-8 w-8 relative rounded-[50%] object-cover cursor-pointer"
                loading="lazy"
                alt=""
                src="/ellipse-14@2x.png"
                onClick={onFollowingButtonIconClick}
              />
            </div>
          </div>
        </div>
        <img
          className="ml-0 w-[1440px] h-px relative max-h-full max-w-[105%] shrink-0"
          loading="lazy"
          alt=""
          src="/line-1.svg"
        />
      </div>
      <section className="mb-[-203px] w-[1136px] flex flex-row items-start justify-start py-0 pr-0 pl-[100px] box-border gap-[0px_49px] max-w-full shrink-0 text-left text-base text-black font-small-m mq675:gap-[0px_49px] mq825:flex-wrap">
        <div className="w-[388px] flex flex-col items-start justify-start gap-[11px_0px] min-w-[388px] max-w-full mq450:min-w-full mq825:flex-1">
          <FrameComponent1 />
          <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1),_0px_0px_1px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start p-[17px] box-border gap-[10px] max-w-full">
            <div className="w-[388px] h-[132px] relative rounded-lg bg-white shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1),_0px_0px_1px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <div className="self-stretch flex flex-row items-end justify-between py-0 px-px gap-[20px] mq450:flex-wrap">
              <b className="relative tracking-[-0.01em] leading-[24px] z-[1]">
                소개
              </b>
              <div className="h-5 w-12 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-5 h-5 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[28px] w-5 h-5 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-10@2x.png"
                />
              </div>
            </div>
            <div className="w-[352px] relative text-xs leading-[16px] inline-block z-[1]">
              <p className="m-0">
                프랑스와 한국을 오가며 활동 중인 프리랜서 일러스트레이터. 일상을
                조각내어 초현실적으로 재조합하는 작업을 즐겨합니다. 
              </p>
              <p className="m-0">광고 / 책표지 / 포스터 / 패키징</p>
              <p className="m-0">작업 문의 : leesolji.pro@gmail.com</p>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1),_0px_0px_1px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[17px] pb-6 pr-[26px] pl-[18px] box-border gap-[10px] max-w-full">
            <div className="w-[388px] h-[97px] relative rounded-lg bg-white shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1),_0px_0px_1px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <b className="relative tracking-[-0.01em] leading-[24px] z-[1]">
              인증 목록
            </b>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_10px] z-[1] mq450:flex-wrap mq450:justify-center">
              <img
                className="h-5 w-5 relative object-cover"
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <img
                className="h-5 w-5 relative object-cover"
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
              />
              <img
                className="h-5 w-5 relative object-cover"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
              <img
                className="h-[22px] w-[22px] relative object-cover min-h-[22px]"
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
              <img
                className="h-[22px] w-[22px] relative rounded-[50px] object-cover min-h-[22px]"
                loading="lazy"
                alt=""
                src="/image-20@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch h-[177px] rounded-lg bg-white shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1),_0px_0px_1px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-[17px] px-[18px] pb-[26px] box-border gap-[10px] max-w-full">
            <div className="w-[388px] h-[177px] relative rounded-lg bg-white shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1),_0px_0px_1px_rgba(0,_0,_0,_0.25)] hidden max-w-full" />
            <b className="relative tracking-[-0.01em] leading-[24px] z-[1]">
              NFT
            </b>
            <div className="w-[142px] flex-1 flex flex-row flex-wrap items-start justify-start bg-[url('/image-21@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
              <img
                className="h-[100px] w-[142px] relative object-cover hidden"
                alt=""
                src="/image-21@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[378px] max-w-full mq450:min-w-full">
          <PostGroupProfile
            ellipse14="/ellipse-14-11@2x.png"
            prop="/-11@2x.png"
            ellipseShape="/ellipse-14-21@2x.png"
            prop1="/@2x.png"
            prop2="/-11@2x.png"
            ellipse141="/ellipse-14-21@2x.png"
            prop3="/@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Frame;
