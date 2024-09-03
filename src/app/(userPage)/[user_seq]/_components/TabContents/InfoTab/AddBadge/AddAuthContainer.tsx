'use client'
import { createContext, useContext, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

type AddAuthContainer_Props = {
  icon: JSX.Element
  title: string
  subTitle: string
  children: React.ReactNode
}
interface AddAuthContextType {
  isSpread: boolean
  setIsSpread: React.Dispatch<React.SetStateAction<boolean>>
}

const AddAuthContext = createContext<AddAuthContextType | undefined>(undefined)

export default function AddAuthContainer({ icon, title, subTitle, children }: AddAuthContainer_Props) {
  const [isSpread, setIsSpread] = useState(false)

  return (
    <AddAuthContext.Provider value={{ isSpread, setIsSpread }}>
      <div className="flex w-full flex-col gap-[10px] rounded-[8px] px-[14px] py-[16px] shadow-popupBox">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[0.3em]">
            <p className="relative top-[0.1rem] flex items-center justify-center">{icon}</p>
            <p className="kr-bold-14">{title}</p>
          </div>
          <button onClick={() => setIsSpread((prev) => !prev)} className={`duration-300 ${isSpread && 'rotate-180'}`}>
            <IoIosArrowUp />
          </button>
        </div>
        <div className="kr-normal-12">{subTitle}</div>
        {isSpread && children}
      </div>
    </AddAuthContext.Provider>
  )
}

export const useAddAuth = () => {
  const context = useContext(AddAuthContext)
  if (!context) {
    throw new Error('useAddAuth must be used within an AddAuthProvider')
  }
  return context
}
