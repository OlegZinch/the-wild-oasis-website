import SideNavigation from '@/app/_components/SideNavigation'

export default function Layout({ children }) {
  return (
    <div className='grid gap-7 lg:gap-12 lg:h-full lg:grid-cols-[16rem_1fr]'>
      <SideNavigation />
      <div className='py-1'>{children}</div>
    </div>
  )
}
