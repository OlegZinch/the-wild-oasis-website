import Link from 'next/link'
import Image from 'next/image'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns'
import DeleteReservation from '@/app/_components/DeleteReservation'

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '')

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    // guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    // status,
    created_at,
    cabins: { name, image },
  } = booking

  return (
    <div className='flex flex-col border border-primary-800 md:flex-row'>
      <div className='relative h-44 aspect-square md:h-32'>
        <Image
          src={image}
          alt={`Cabin ${name}`}
          className='object-cover border-primary-800 md:border-r'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      <div className='flex-grow px-3 py-3 flex flex-col gap-2 md:px-6 md:gap-0'>
        <div className='flex items-center justify-between'>
          <h3 className='text-base font-semibold md:text-xl'>
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className='bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm'>
              past
            </span>
          ) : (
            <span className='bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm'>
              upcoming
            </span>
          )}
        </div>

        <p className='text-sm text-primary-300 md:text-lg'>
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>

        <div className='flex gap-1 mt-auto items-baseline md:gap-5'>
          <p className='text-sm font-semibold text-accent-400 md:text-xl'>
            ${totalPrice}
          </p>
          <p className='text-primary-300'>&bull;</p>
          <p className='text-sm text-primary-300 md:text-lg'>
            {numGuests} guest{numGuests > 1 && 's'}
          </p>
          <p className='ml-auto text-xs text-primary-400 md:text-sm'>
            Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
          </p>
        </div>
      </div>

      <div className='flex border-t h-10 border-primary-800 md:h-auto md:w-[100px] md:flex-col md:border-l md:border-t-0'>
        {!isPast(new Date(startDate)) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className='group flex items-center justify-center md:justify-start gap-2 uppercase text-xs font-bold text-primary-300 border-r md:border-r-0 md:border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'
            >
              <PencilSquareIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
              <span className='mt-1'>Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  )
}

export default ReservationCard
