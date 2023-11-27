import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Toaster } from 'sonner';
import { Modal } from '@/components/modal';
import { SideNav } from '@/components/side-nav';
import { FloatingButton } from '@/components/side-nav/button';

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
        </div>
        <FloatingButton />
        <Modal />
      </body>
    </html>
  );
}
