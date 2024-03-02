import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import GroupComponent1 from "../components/group-component1";
import PostGroupProfile from "../components/post-group-profile";
import GroupComponent from "../components/group-component";

const Frame1: NextPage = () => {
  const router = useRouter();

  const onEllipseIconClick = useCallback(() => {
    router.push("/frame");
  }, [router]);

  return (
    <div className="w-full h-[768px] relative bg-background-gray overflow-hidden flex flex-col items-center justify-start gap-[22px_0px] tracking-[normal] text-left text-xl text-black font-inter mq825:h-auto">
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
                onClick={onEllipseIconClick}
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
      <section className="mt-[-187px] mb-[-187px] w-[1177px] flex flex-row flex-wrap items-start justify-start pt-[190px] pb-0 pr-[21px] pl-5 box-border gap-[0px_19px] max-w-full shrink-0">
        <GroupComponent1 />
        <PostGroupProfile
          ellipse14="/ellipse-14-1@2x.png"
          prop="/@2x.png"
          ellipseShape="/ellipse-14-2@2x.png"
          prop1="/@2x.png"
          prop2="/-1@2x.png"
          ellipse141="/ellipse-14-2@2x.png"
          prop3="/@2x.png"
          propAlignSelf="unset"
          propGap="22px 0px"
          propFlex="1"
          propMinWidth="383px"
          propWidth="5.08%"
          propLeft="2.88%"
          propRight="2.88%"
          propLeft1="10.68%"
          propPadding="unset"
          propLeft2="-44px"
          propWidth1="unset"
          propPadding1="unset"
          propLeft3="-44px"
          propWidth2="unset"
        />
        <GroupComponent />
      </section>
    </div>
  );
};

export default Frame1;
