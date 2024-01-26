'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { differenceInCalendarDays } from 'date-fns';
import { format } from 'date-fns';

import React, { useState } from 'react';

export default function CalendarPage() {
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedTime, setSelectedTime] = useState('');
  // const handleDateSelect = (date: Date) => {
  //   if (selectedDate && selectedDate.getTime() === date.getTime()) {
  //     setSelectedDate(null);
  //   } else {
  //     setSelectedDate(date);
  //   }
  // };
  const handleTimeClick = (time: string) => {
    if (selectedTime === time) {
      setSelectedTime('');
    } else {
      setSelectedTime(time);
    }
  };
  //시간 버튼 생성
  const times = [];
  for (let i = 8; i < 18; i += 1) {
    times.push(i);
  }
  const timeList = times.map((time) => {
    const timeString = `${time}:00`;
    const isSelected = selectedTime === timeString;
    return (
      <Button
        variant='outline'
        key={time}
        // disabled={bookedTimes.includes(time)}
        onClick={() => handleTimeClick(timeString)}
        style={{
          backgroundColor: isSelected ? 'black' : 'transparent',
          color: isSelected ? 'white' : 'black',
        }}
      >{`${time}:00`}</Button>
    );
  });
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
      <div>{timeList}</div>
      {selectedTime && date && (
        <div>
          예약 일시 : {selectedTime} {format(date, 'PPP')}
        </div>
      )}
    </>
  );
}
