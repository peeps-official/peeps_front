import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  image9?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propWidth?: CSSProperties["width"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  image9,
  prop,
  prop1,
  propMinHeight,
  propWidth,
}) => {
  const image9IconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const verticalLineStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-4 px-0 text-left text-sm text-black font-inter">
      <div className="w-[131px] flex flex-col items-start justify-start gap-[4px_0px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[0px_7px]">
          <img
            className="h-[22px] w-[22px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src={image9}
            style={image9IconStyle}
          />
          <div className="flex-1 relative leading-[20px] font-medium z-[1]">
            {prop}
          </div>
        </div>
        <div
          className="w-[90px] flex flex-row items-start justify-start py-0 px-[29px] box-border text-center text-xs text-gray-200"
          style={verticalLineStyle}
        >
          <div className="flex-1 rounded-10xs bg-gray-300 flex flex-row items-center justify-center z-[1]">
            <div className="relative leading-[20px]">{prop1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
