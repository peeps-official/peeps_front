import Link from 'next/link'

interface SidebarItemProps {
  title: string
  url: any
}

export default function SidebarItem({ title, url }: SidebarItemProps) {
  return (
    <li>
      <Link href={url} className="block px-4 py-2 text-black hover:bg-gray-700">
        {title}
      </Link>
    </li>
  )
}
