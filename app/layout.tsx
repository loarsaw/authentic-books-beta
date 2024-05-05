import React from 'react';
import '../styles/globals.css';
import '@radix-ui/themes/styles.css';
import Generator from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { SparklesCore } from '../components/Stars/Starts';
import { Theme } from '@radix-ui/themes';
import Timer from '../components/timer';
import Sparkles from '../components/sparkles';

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});

export async function generateMetadata() {
  return {
    title: 'Authentic Books',
    description: 'Feed your mind',
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" ">
        <Theme>
          <div className=" relative bg-gray-900 dark:bg-zinc-950">
            <div className="absolute h-full w-full">
              <Sparkles />
            </div>
            <div className="absolute bottom-0 right-0">
              <Timer />
            </div>
            <div className="">{children}</div>
            <Analytics />
          </div>
        </Theme>
      </body>
    </html>
  );
}
