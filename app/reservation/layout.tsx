// components/layout.js
import React from 'react';

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='py-12'>{children}</div>;
}
