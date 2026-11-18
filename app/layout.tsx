import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next-Gen Blood Bank',
  description: 'Blood donation, request, inventory and camp management platform',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
