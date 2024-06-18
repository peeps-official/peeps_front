import tw from "tailwind-styled-components"
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

// style components : tw
// 선택창
const ClickContainer = tw.div`flex flex-row items-start self-stretch justify-start px-4 py-3 bg-whitesmoke-300 rounded-8xs gap-[10px]`
const UnclickContainer = tw.div`flex flex-row items-start self-stretch justify-start px-4 py-3 bg-white rounded-8xs gap-[10px]`
const IconContainer = tw.div`flex flex-col items-start justify-start pt-[5px] px-0 pb-0`
const Icon = tw.div`relative w-6 h-6 bg-gray-400`
const TextStyle = tw.div`flex relative tracking-[-0.01em] leading-[34px]`

// 프로필 미리보기
const InfoContainer = tw.div`flex flex-row items-center justify-center gap-[1px]`
const InfoIcon = tw.img`h-2.5 w-2.5 relative overflow-hidden shrink-0`
const InfoNumberStyle = tw.div`relative leading-[16px] inline-block min-w-[83px] whitespace-nowrap`
const InfoAddressStyle = tw.a`relative leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[97px] whitespace-nowrap`

// 프로필 편집 내용
export type ComponentType = {
  className?: string;
  prop?: string;
  placeholder?: string;
  type?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const EditComponent: NextPage<ComponentType> = ({
  className = "",
  prop,
  placeholder,
  type,
  propMinWidth,
}) => {
  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-base ${className}`}
    >
      <div className="flex flex-col items-start justify-start px-0 py-4">
        <b
          className="relative tracking-[-0.01em] leading-[34px] inline-block min-w-[30px] font-bold"
          style={bStyle}
        >
          {prop}
        </b>
      </div>
      <div className="self-stretch rounded-8xs flex flex-row items-start justify-start py-2 px-4 border-[1px] border-solid border-whitesmoke-300">
        <input
          className="w-[232px] [border:none] [outline:none] bg-[transparent] h-[34px] relative tracking-[-0.01em] leading-[34px] text-left font-medium text-base flex items-center p-0"
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
};

export {ClickContainer, UnclickContainer, IconContainer, Icon, TextStyle, 
    InfoContainer, InfoIcon, InfoNumberStyle, InfoAddressStyle,
    EditComponent}