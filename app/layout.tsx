//"use client";
import '@/app/ui/global.css';
import React, {  } from 'react';
////binaryhoriontal115.woff2  hex115.woff2 binaryvertical115.woff2
import { hin115_font, ing115_font } from '@/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s | zava8 dàshboàrd', default: 'zava8 dàshboàrd', },
  description: 'тhe official next.js learn dàshboàrd built with àpp router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
        <body className={`${ing115_font.className} antialiased`}>
          {children}
        </body>
    </html>
  );
}
