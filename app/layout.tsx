//"use client";
import '@/app/ui/global.css';
import React, {  } from 'react';
import { hindienglosoftw8asc } from "@/app/ui/lifonts/localfonts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s | zava8 dàshboàrd', default: 'zava8 dàshboàrd', },
  description: 'тhe official next.js learn dàshboàrd built with àpp router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
        <body className={`${hindienglosoftw8asc.className} antialiased`}>
          {children}
        </body>
    </html>
  );
}
