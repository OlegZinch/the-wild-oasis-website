import Image from 'next/image'
import Link from 'next/link'
import bg from '@/public/bg.png'

export default function Page() {
  return (
    <section className='mt-52 md:mt-24'>
      <Image
        src={bg}
        className='object-cover object-top'
        alt='Mountains and forests with two cabins'
        placeholder='blur'
        quality={80}
        fill
      />

      <div className='relative z-10 text-center'>
        <h1 className='text-4xl text-primary-50 mb-10 tracking-tight font-normal sm:text-5xl md:text-8xl'>
          Welcome to paradise.
        </h1>
        <Link
          href='/cabins'
          className='bg-accent-500 px-4 py-4 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all md:px-8 md:py-6'
        >
          Explore luxury cabins
        </Link>
      </div>
    </section>
  )
}
