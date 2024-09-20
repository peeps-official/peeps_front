'use client'

import { useState } from 'react'
import Education from '../../Info/Item/Education'
import AddEducationModal from './AddEducationModal'

export default function EducationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">학력</h2>
        <button className="blueBtn" onClick={() => setIsModalOpen(true)}>
          추가하기
        </button>
      </div>
      <div className="mt-5">
        <Education />
      </div>
      {isModalOpen && <AddEducationModal type="new" setIsOpen={setIsModalOpen} />}
    </section>
  )
}
