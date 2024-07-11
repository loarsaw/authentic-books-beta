'use client';
import React, { useEffect, useRef } from 'react';
import '../styles/globals.css';
import '@radix-ui/themes/styles.css';
import { getGlobalData } from '../lib/cosmic';
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
<<<<<<< HEAD
=======
  const socket: any = useRef();
  const connectionUrl = 'http://3.110.216.79:5001';
  // function connectSocket() {
  //   socket.current = io(connectionUrl, {
  //     transports: ['websocket'],
  //     query: {
  //       uid: '12092',
  //     },
  //   });
  //   socket.current.on('connection');
  // }
  // useEffect(() => {
  //   connectSocket();
  // }, []);

>>>>>>> f064467 (new changes)
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
          </div>
        </Theme>
      </body>
    </html>
  );
}
