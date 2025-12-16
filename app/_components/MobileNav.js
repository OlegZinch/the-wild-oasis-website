'use client'

import { useState } from 'react'
import BurgerButton from '@/app/_components/BurgerButton'
import MobileNavigation from '@/app/_components/MobileNavigation'

function MobileNav({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleHandler() {
    setIsOpen((prev) => !prev)
  }

  function closeHandler() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div>
      <BurgerButton open={isOpen} onClick={toggleHandler} />
      <MobileNavigation open={isOpen} onClose={closeHandler}>
        {children}
      </MobileNavigation>
    </div>
  )
}

export default MobileNav
