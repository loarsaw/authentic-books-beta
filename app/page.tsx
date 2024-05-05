import Link from 'next/link';
import React from 'react';

export default async function Page(): Promise<JSX.Element> {
  return (
    <div
      className="flex
  h-screen flex-col items-center justify-center
  "
    >
      <div>
        <p className="text-4xl antialiased">
          <a className="underline decoration-[#243c5a]">Auth</a>entic Books
        </p>
      </div>
      <div className="hover:cursor-pointers mt-5">
        <Link
          href={'/book/evelyn-nightshade'}
          className=" group relative inline-block text-lg"
        >
          <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
            <span className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3"></span>
            <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
            <span className="relative">Feed your mind</span>
          </span>
          <span
            className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </div>
  );
}
