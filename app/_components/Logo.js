import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'

function Logo({ children }) {
  return (
    <Link href='/' className='flex items-center gap-2 z-10 sm:gap-4'>
      {/* <Image src='/logo.png' height='60' width='60' alt='The Wild Oasis logo' /> */}
      <div className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]'>
        <Image
          src={logo}
          height='60'
          width='60'
          alt='The Wild Oasis logo'
          quality={80}
          priority
        />
      </div>

      {children && (
        <span className='text-sm font-semibold text-primary-100 sm:text-xl'>
          {children}
        </span>
      )}
    </Link>
  )
}

export default Logo
