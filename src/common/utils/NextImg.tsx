import Image from 'next/image'

interface NextImgProps {
  src: string
  alt: string
  styles?: string
}

export default function NextImg({ src, alt, styles }: NextImgProps) {
  let classStyle = `relative ${styles} w-full h-full`

  return (
    <div className={classStyle}>
      <Image alt={alt} src={src} fill />
    </div>
  )
}
