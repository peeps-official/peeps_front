import type { NextPage } from "next";
import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const FrameComponent1: NextPage = () => {
  const onGroupFrameClick = useCallback(() => {
    // Please sync "프로필 변경 페이지" to the project
  }, []);

  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start py-[17px] pr-7 pl-2.5 gap-[10px] text-left text-lg text-black font-small-m mq450:flex-wrap">
      <img
        className="h-[100px] w-[100px] relative rounded-8xs object-cover min-h-[100px] mq450:flex-1"
        loading="lazy"
        alt=""
        src="/@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px_0px] min-w-[156px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[0px_8px]">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[28px] font-bold font-inherit">
                엄현준
              </h3>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-[18px] h-[18px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/ellipse-12@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0px_4px] text-3xs text-gray-30">
              <div className="flex flex-row items-start justify-start gap-[3px]">
                <div className="relative leading-[16px]">팔로워</div>
                <div className="relative leading-[16px]">0</div>
              </div>
              <div className="flex flex-row items-start justify-start py-px px-0 gap-[0px_3px]">
                <div className="relative leading-[16px]">팔로잉</div>
                <div className="relative leading-[16px]">0</div>
              </div>
            </div>
          </div>
          <div className="w-60 relative text-3xs leading-[16px] text-dark inline-block">
            <p className="m-0">{`CEO & Founder, CLASSUM | Forbes 30 under 30 Asia - We're hiring! careers.classum.com`}</p>
          </div>
        </div>
        <Button
          className="h-[26px] min-h-[30px] whitespace-nowrap cursor-pointer"
          name="profile"
          id="profile"
          variant="primary"
          size="sm"
          onClick={onGroupFrameClick}
        >
          프로필 변경
        </Button>
      </div>
    </div>
  );
};

export default FrameComponent1;
