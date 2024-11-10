import Link from 'next/link'

export function DivLine() {
  return (
    <div className="w-full items-center px-3 py-0">
      <div className="relative h-[1px] w-full bg-gray-300" />
    </div>
  )
}

export function SideBarPartWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-3 py-2 ${className}`}>{children}</div>
}

export function SideBarLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex w-full items-center gap-3 overflow-hidden rounded-md p-1 hover:bg-gray-200">
      {children}
    </Link>
  )
}
