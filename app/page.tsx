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
      <div className="mt-5">
        <p>Feed your mind</p>
      </div>
    </div>
  );
}
