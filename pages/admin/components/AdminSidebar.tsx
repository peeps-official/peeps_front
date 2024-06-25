import {
  ClockIcon,
  KeyIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@/components/icon/icon'
import Link from 'next/link'

export default function AdminSidebar() {
  return (
    <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-[60px] items-center px-6">
        <Link
          href="#"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <ShieldCheckIcon className="w-6 h-6" />
          <span>Admin Dashboard</span>
        </Link>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-4 text-sm font-medium">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-900 transition-all rounded-lg hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            prefetch={false}
          >
            <KeyIcon className="w-4 h-4" /> Authentication
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-500 transition-all rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            <UsersIcon className="w-4 h-4" /> User Management
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-gray-500 transition-all rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            <ClockIcon className="w-4 h-4" /> Logs
          </Link>
        </nav>
      </div>
    </div>
  )
}
