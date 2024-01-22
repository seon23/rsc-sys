'use client';

import { Calendar } from '@/components/ui/calendar';
import CheckReservation from '@/components/ui/checkReservation';
import Time from '@/components/ui/timeButton';
import { differenceInCalendarDays } from 'date-fns';

import React from 'react';

export default function calendarPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  function isPasteDate(date: Date) {
    return differenceInCalendarDays(date, new Date()) < 0;
  }

  return (
    <>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
        disabled={isPasteDate}
      />
      <Time />
      <CheckReservation />
    </>
  );
}
