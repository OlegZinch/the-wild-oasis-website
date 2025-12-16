import Link from 'next/link'
import Logo from '@/app/_components/Logo'

function MobileNavigation({ open, onClose, children }) {
  return (
    <nav
      className={`fixed top-0 left-0 z-[998] text-2xl transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {open ? (
        <ul
          className={`w-screen bg-primary-800 flex flex-col items-center gap-y-2 p-4`}
        >
          <li className='mb-2' onClick={onClose}>
            <Logo />
          </li>
          <li onClick={onClose}>
            <Link
              href='/cabins'
              className='hover:text-accent-400 transition-colors'
            >
              Cabins
            </Link>
          </li>
          <li onClick={onClose}>
            <Link
              href='/about'
              className='hover:text-accent-400 transition-colors'
            >
              About
            </Link>
          </li>
          <li onClick={onClose}>{children}</li>
        </ul>
      ) : null}
    </nav>
  )
}

export default MobileNavigation
