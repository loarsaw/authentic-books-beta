import React from 'react';
import '../styles/globals.css';
import '@radix-ui/themes/styles.css';
import { getGlobalData } from '../lib/cosmic';
import Generator from 'next/font/local';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SparklesCore } from '../components/Stars/Starts';
import { Theme } from '@radix-ui/themes';
import Timer from '../components/timer';

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});

export async function generateMetadata() {
  const siteData = await getGlobalData();
  return {
    title: siteData.metadata.site_title,
    description: siteData.metadata.site_tag,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteData = await getGlobalData();

  return (
    <html lang="en">
      <body className=" ">
        <Theme>
          <div className=" relative bg-gray-900 dark:bg-zinc-950">
            <div className="absolute h-full w-full">
              <SparklesCore />
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
