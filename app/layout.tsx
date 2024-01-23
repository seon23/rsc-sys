import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { ReactNode } from 'react';

import './globals.css';
import { NavModal } from './ui/NavModal';
import { Input } from './ui/atoms/input';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='p-4 fixed z-30 w-full shadow-md grid grid-cols-3 justify-between bg-background overflow-hidden items-center'>
          <NavModal />
          <h1 className='text-center'>강의실 예약하기</h1>
          <div className='flex items-center'>
            <Input type='text' className='bg-background h-8 lg:w-10/12' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              />
            </svg>
          </div>
        </header>
        <main className='pt-16'>{children}</main>
        <footer className='grid grid-cols-3 gap-3 bg-slate-400'>Footer</footer>
      </body>
    </html>
  );
}
