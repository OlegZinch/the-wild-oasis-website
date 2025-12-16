function BurgerButton({ open, onClick }) {
  return (
    <button
      className='fixed z-[999] top-8 right-5 h-8 w-10 flex flex-col items-center justify-center p-1 gap-1.5 md:hidden'
      onClick={onClick}
    >
      <span
        className={`bg-accent-600 h-0.5 block w-full rounded transition-all duration-300 ease-in-out ${
          open ? 'bg-primary-200 translate-y-2 rotate-45' : ''
        }`}
      ></span>
      <span
        className={`bg-accent-600 h-0.5 block w-full rounded transition-all duration-200 ease-in-out ${
          open ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`bg-accent-600 h-0.5 block w-full rounded transition-all duration-300 ease-in-out ${
          open ? 'bg-primary-200 -translate-y-2 -rotate-45' : ''
        }`}
      ></span>
    </button>
  )
}

export default BurgerButton
