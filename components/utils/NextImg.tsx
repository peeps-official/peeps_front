import Image from 'next/image'

/*
  src: string
  alt: string
  styles: string
*/

export default function NextImg({ src, alt, styles }: any) {
  let classStyle = `relative ${styles}`

  return (
    <div className={classStyle}>
      <Image alt={alt} src={src} layout="fill" />
    </div>
  )
}
