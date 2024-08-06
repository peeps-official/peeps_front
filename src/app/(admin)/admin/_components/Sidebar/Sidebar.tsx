import Link from 'next/link'
import SidebarItem from './SidebarItem'

export default function SideBar() {
  return (
    <div className="fixed absolute left-0 w-64 h-full text-white bg-white">
      <div className="px-5 py-5">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-[20px] font-bold text-black">Peeps</div>
        </Link>
      </div>
      <ul className="mt-5">
        <SidebarItem title="유저" url="/admin/user" />
        <SidebarItem title="뱃지" url="/admin/badge" />
      </ul>
    </div>
  )
}
