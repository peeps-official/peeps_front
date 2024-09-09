import React from 'react'

interface LinkButtonProps {
  icon?: string // Path to the icon
  text: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ icon, text }) => {
  return (
    <div className="flex cursor-pointer items-center rounded-lg bg-white p-4 shadow-md transition hover:bg-gray-100">
      {icon && <img src={icon} alt="icon" className="mr-4 h-8 w-8" />}
      <span className="kr-medium-14">{text}</span>
    </div>
  )
}

const VideoWithCaption: React.FC<{ videoSrc: string; title: string; explane: string }> = ({
  videoSrc,
  title,
  explane,
}) => {
  return (
    <div className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-md transition hover:bg-gray-100">
      <span className="kr-medium-14 mb-1 w-full">{title}</span>
      <p className="kr-regular-14 mb-1 w-full">{explane}</p>
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={videoSrc}
          title="YouTube video player"
          className="rounded-lg shadow-md"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  )
}

const VideoEmbed: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  return (
    <div className="mt-4 aspect-video w-full">
      <iframe
        width="100%"
        height="100%"
        src={videoSrc}
        title="YouTube video player"
        className="rounded-lg shadow-md"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  )
}

const MediaLinks: React.FC = () => {
  return (
    <div className="mx-auto w-full rounded-lg p-4 shadow-popupBox">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="kr-bold-14">링크</h1>
      </div>
      <div className="flex flex-col gap-2">
        {/* Link Buttons */}
        <LinkButton
          icon="https://cdn.litt.ly/images/elmqz5QWL1B7umGuFFtVCpCNv4m3GklH?s=480x480&f=webp"
          text="🥳 포트폴리오 - 인증기반 SNS PEEPS"
        />
        <LinkButton
          icon="https://cdn.litt.ly/images/bRBK1six0e0uwsrSRAxRHNwUu6Bl7GkM?s=480x480&f=webp"
          text="🍪 쿠키즈 1분요약 영상 확인하기 🍪"
        />
        <VideoWithCaption
          videoSrc="https://www.youtube.com/embed/uKwvio7tw4c?si=YJXs4Wk8sCnSWhWs"
          title="한경대 개교 축하 영상 출연"
          explane="해외자율연수에 참가하며, 개교 축하 영상에 출연하게 되었습니다."
        />
        <LinkButton text="이력서 확인하기" />

        <VideoEmbed videoSrc="https://www.youtube.com/embed/9WKzt9QEmD4?si=yskDg-UHUosRKc4C" />
      </div>
    </div>
  )
}

export default MediaLinks
