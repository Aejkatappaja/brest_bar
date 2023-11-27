import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { SideNav } from '@/components/side-nav';
import { Modal } from '@/components/modal';
import { Toaster } from 'sonner';
import { FloatingButton } from '@/components/floating-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brest Bar',
  description: 'Technical Interview',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={(inter.className, 'antialised flex h-screen flex-col')}>
        <Toaster position='top-center' />
        <Header />
        <div className='flex h-screen'>
          <SideNav />
          <div className='flex-grow'>{children}</div>
        </div>{' '}
        <FloatingButton />
        <Modal />
      </body>
    </html>
  );
}
