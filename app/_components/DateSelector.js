'use client'

import { differenceInDays, isPast, isSameDay, isWithinInterval } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { useReservation } from '@/app/_components/ReservationContext'

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range?.from, end: range?.to })
    )
  )
}

function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useReservation()

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range

  const { regularPrice, discount } = cabin
  const numNights = differenceInDays(displayRange?.to, displayRange?.from)
  const cabinPrice = (regularPrice - discount) * numNights

  const { minBookingLength, maxBookingLength } = settings

  return (
    <div className='flex flex-col lg:justify-between'>
      <DayPicker
        className='pt-4 pb-4 place-self-center lg:pt-12 lg:pb-0'
        mode='range'
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout='dropdown'
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className='flex items-center justify-between px-4 bg-accent-500 text-primary-800 h-[60px] md:h-[72px] md:px-8'>
        <div className='flex items-baseline gap-1 md:gap-6'>
          <p className='flex gap-1 items-baseline md:gap-2'>
            {discount > 0 ? (
              <>
                <span className='text-lg md:text-2xl'>
                  ${regularPrice - discount}
                </span>
                <span className='line-through font-semibold text-primary-700'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-lg md:text-2xl'>${regularPrice}</span>
            )}
            <span>/night</span>
          </p>
          {numNights ? (
            <>
              <p className='bg-accent-600 px-1 md:px-3 py-1 md:py-2 text-lg md:text-2xl'>
                <span>&times;</span>&nbsp;<span>{numNights}</span>
              </p>
              <p>
                <span className='text-sm font-bold uppercase md:text-lg'>
                  Total
                </span>
                &nbsp;
                <span className='text-base font-semibold md:text-2xl'>
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {displayRange?.from || displayRange?.to ? (
          <button
            className='border border-primary-800 py-2 px-1 md:px-4 text-sm font-semibold'
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default DateSelector
