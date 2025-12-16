import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@/app/_lib/auth'

async function GuestItem() {
  const session = await auth()

  return (
    <>
      {session?.user?.image ? (
        <Link
          href='/account'
          className='hover:text-accent-400 transition-colors flex items-center gap-2 md:gap-4'
        >
          <Image
            className='h-8 rounded-full'
            src={session.user.image}
            alt={session.user.name}
            referrerPolicy='no-referrer'
            width={32}
            height={32}
            quality={80}
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href='/account'
          className='hover:text-accent-400 transition-colors'
        >
          Guest area
        </Link>
      )}
    </>
  )
}

export default GuestItem
