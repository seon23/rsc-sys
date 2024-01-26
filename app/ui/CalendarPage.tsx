'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { differenceInCalendarDays } from 'date-fns';
import { format } from 'date-fns';

import React, { useEffect, useState } from 'react';

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);

  const handleReservationConfirm = () => {
    const newBookedTimes = [...bookedTimes, selectedTime];
    setBookedTimes(newBookedTimes);
    localStorage.setItem('bookedTimes', JSON.stringify(newBookedTimes));
    // 선택된 시간 초기화 또는 추가 로직
    setSelectedTime('');
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const storedBookedTimes = localStorage.getItem('bookedTimes');
    if (storedBookedTimes) {
      setBookedTimes(JSON.parse(storedBookedTimes));
    }
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedTime, setSelectedTime] = useState('');
  const handleDateSelect = (date: Date) => {
    if (selectedDate && selectedDate.getTime() === date.getTime()) {
      setSelectedDate(null);
      setSelectedTime('');
    } else {
      setSelectedDate(date);
      setSelectedTime('');
    }
  };
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
    const isBooked = bookedTimes.includes(timeString);

    return (
      <Button
        variant='outline'
        key={time}
        onClick={() => handleTimeClick(timeString)}
        disabled={isBooked}
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
      <h1 className='text-center'>🗓 날짜와 시간을 선택 해주세요.</h1>

      <div className='container mx-auto p-4'>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            onDayClick={handleDateSelect}
            className='rounded-md border'
            disabled={isPasteDate}
          />
          <div className='flex flex-wrap justify-center'>{timeList}</div>
        </div>
        {selectedTime && date && (
          <div className='flex flex-col justify-center items-center'>
            예약 일시 : {selectedTime} {format(date, 'PPP')}
            <div>
              <AlertDialog>
                <Button variant='outline'>
                  <AlertDialogTrigger>예약</AlertDialogTrigger>
                </Button>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      {selectedTime} {format(date, 'PPP')} 일자로 예약
                      하시겠습니까?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleReservationConfirm}>
                      Ok
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
