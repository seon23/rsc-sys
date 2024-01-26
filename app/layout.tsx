import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { ReactNode } from 'react';

import './globals.css';
import Header from './ui/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {/* <main>{children}</main> */}
        <div className='pt-20'>
          {children}
        </div>
      </body>
    </html>
  );
}
