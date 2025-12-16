import Image from 'next/image'
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid'

import TextExpander from '@/app/_components/TextExpander'

function Cabin({ cabin }) {
  const { name, maxCapacity, image, description } = cabin

  return (
    <div className='grid lg:grid-cols-[3fr_4fr] lg:gap-20 border border-primary-800 lg:py-3 lg:px-10 mb-12 md:mb-24'>
      <div className='relative h-64 lg:scale-[1.15] lg:-translate-x-3 lg:h-auto'>
        <Image
          src={image}
          className='object-cover'
          alt={`Cabin ${name}`}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
      </div>

      <div>
        <h3 className='text-accent-100 font-black text-4xl md:text-7xl mb-4 mt-4 md:mb-5 lg:mt-0 lg:translate-x-[-254px] bg-primary-950 p-4 lg:p-6 pb-1 lg:w-[150%]'>
          Cabin {name}
        </h3>

        <p className='text-lg text-primary-300 mb-10 px-4 lg:px-0'>
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className='flex flex-col gap-4 mb-4 md:mb-7 px-4 lg:px-0'>
          <li className='flex gap-3 items-center'>
            <UsersIcon className='h-5 w-5 text-primary-600' />
            <span className='text-lg'>
              For up to <span className='font-bold'>{maxCapacity}</span>
              &nbsp;guests
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <MapPinIcon className='h-5 w-5 text-primary-600' />
            <span className='text-lg'>
              Located in the heart of the&nbsp;
              <span className='font-bold'>Dolomites</span>&nbsp;(Italy)
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <EyeSlashIcon className='h-5 w-5 text-primary-600' />
            <span className='text-lg'>
              Privacy <span className='font-bold'>100%</span>&nbsp;guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Cabin
