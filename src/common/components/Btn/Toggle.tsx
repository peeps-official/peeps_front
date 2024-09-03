'use client'
import { useState } from 'react'

type ToggleButtonProps = {
  isEnable: boolean
}

export default function ToggleButton({ isEnable }: ToggleButtonProps) {
  const [enabled, setEnabled] = useState(isEnable)

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
        enabled ? 'bg-blue-600' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          enabled ? 'translate-x-5' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
