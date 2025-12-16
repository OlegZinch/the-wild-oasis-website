import Link from 'next/link'
import GuestItem from '@/app/_components/GuestItem'

export default function Navigation() {
  return (
    <nav className='z-10 text-xl hidden md:block'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/cabins'
            className='hover:text-accent-400 transition-colors'
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='hover:text-accent-400 transition-colors'
          >
            About
          </Link>
        </li>
        <li>
          <GuestItem />
        </li>
      </ul>
    </nav>
  )
}
