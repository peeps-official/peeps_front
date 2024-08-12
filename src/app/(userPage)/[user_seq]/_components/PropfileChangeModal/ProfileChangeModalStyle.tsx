import tw from 'tailwind-styled-components'
import { useMemo, type CSSProperties } from 'react'

// style components : tw
// 선택창
interface ClickContainerType {
  $isSelected?: boolean
}

export const ClickContainer = tw.div<ClickContainerType>`
  ${(p) => (p.$isSelected ? 'bg-whitesmoke-300' : 'bg-white')}
  flex self-stretch
  px-4 py-3 
  rounded-8xs
  gap-[10px]
  `

export const IconContainer = tw.div`flex flex-col pt-[5px] px-0 pb-0`
export const Icon = tw.div`relative w-6 h-6 bg-gray-lightest`
export const TextStyle = tw.div`flex relative tracking-[-0.01em] leading-[34px]`

// 프로필 미리보기
export const InfoContainer = tw.div`flex items-center justify-center gap-[1px]`
export const InfoIcon = tw.img`h-2.5 w-2.5 relative overflow-hidden shrink-0`
export const InfoNumberStyle = tw.div`relative leading-[16px] inline-block min-w-[83px] whitespace-nowrap`
export const InfoAddressStyle = tw.a`relative leading-[16px] text-[inherit] inline-block [text-decoration:none] min-w-[97px] whitespace-nowrap`

// 프로필 편집 내용
export type ComponentType = {
  className?: string
  prop?: string
  placeholder?: string
  type?: string

  /** Style props */
  propMinWidth?: CSSProperties['minWidth']
}

export function EditComponent({
  className = '',
  prop,
  placeholder,
  type,
  propMinWidth,
}: ComponentType) {
  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    }
  }, [propMinWidth])

  return (
    <div className={`self-stretch flex flex-col text-left text-base ${className}`}>
      <div className="flex flex-col px-0 py-4">
        <b
          className="relative tracking-[-0.01em] leading-[34px] inline-block min-w-[30px] font-bold"
          style={bStyle}
        >
          {prop}
        </b>
      </div>
      <div className="self-stretch rounded-8xs flex py-2 px-4 border-[1px] border-solid border-whitesmoke-300">
        <input
          className="w-[232px] [border:none] [outline:none] bg-[transparent] h-[34px] relative tracking-[-0.01em] leading-[34px] text-left font-medium text-base flex items-center p-0"
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  )
}
