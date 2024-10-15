'use client'

import { Input } from '@/src/common/components/Input/Input'
import { useState } from 'react'
import Carrer from '../../Info/Item/Carrer'
import AddCareerModal from './AddCareerModal'

export default function CareerTab() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">경력</h2>
        <button className="blueBtn" onClick={() => setIsModalOpen(true)}>
          추가하기
        </button>
      </div>
      <div className="mt-5">
        <Carrer />
      </div>
      {isModalOpen && <AddCareerModal type="new" setIsOpen={setIsModalOpen} />}
    </section>
  )
}
