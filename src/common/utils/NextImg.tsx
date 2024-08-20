import Image from 'next/image'

interface NextImgProps {
  src: string
  alt: string
  styles?: string
}

export default function NextImg({ src, alt, styles = '' }: NextImgProps) {
  let classStyle = `relative w-full h-full object-cover ${styles}`

  return (
    <div className={classStyle}>
      <Image className="object-cover" alt={alt} src={src} fill />
    </div>
  )
}
