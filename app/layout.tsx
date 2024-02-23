import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Магазинчик',
  description: 'Cool-Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
