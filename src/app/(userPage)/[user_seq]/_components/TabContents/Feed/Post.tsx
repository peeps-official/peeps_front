'use client'
import { FaThumbsUp, FaCommentAlt, FaShare } from 'react-icons/fa'

export default function Post() {
  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-popupBox">
      <div className="flex items-start space-x-4">
        <img
          src="https://media.licdn.com/dms/image/v2/D560BAQHrABnQK3_bBw/company-logo_100_100/company-logo_100_100/0/1662339004690/viva_republica_logo?e=1733961600&v=beta&t=nglmyYIM0N__SkJ-omM_F_pesIEFNUZNh2HG6vVC5D0" // Replace with the actual image source
          alt="Profile"
          className="h-12 w-12 rounded-full"
        />
        <div>
          <div className="flex items-center justify-start gap-2">
            <h2 className="text-lg font-semibold">Viva Republica (Toss)</h2>
            <p className="text-sm text-gray-600"> 1:08 PM • 수정됨</p>
          </div>
          <p className="mt-4 text-gray-700">
            🚀 토스의 입체적 성장에 누구보다 진심인 사람들이 모인 Corp-Dev Chapter에 변화가 찾아오다
          </p>
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQECx_U3Tl2sWg/feedshare-shrink_800/feedshare-shrink_800/0/1725458263180?e=1728518400&v=beta&t=MuhJoX0ZwEq73PCDZAnwprHldjdJBIYZA_TyZf8pv9A" // Replace with your uploaded image
            alt="Uploaded Content"
            className="mt-4 h-auto max-h-[1000px] max-w-[500px] rounded-lg"
          />
          <InteractionButtons />
        </div>
      </div>
    </div>
  )
}

const IconButton = ({ icon, label }: any) => {
  return (
    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
      {icon}
      <span>{label}</span>
    </button>
  )
}

const InteractionButtons = () => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex space-x-4">
        <IconButton icon={<FaThumbsUp />} label="추천" />
        <IconButton icon={<FaCommentAlt />} label="댓글" />
        <IconButton icon={<FaShare />} label="퍼가기" />
      </div>
    </div>
  )
}
