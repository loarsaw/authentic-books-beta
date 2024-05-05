'use client';
import React, { useEffect, useState } from 'react';
import Signup from '../../../components/registerModal/Signup';

type Props = {};

const IndividualPost = (props: Props) => {
  const [openModal, setModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 3000);
  }, []);

  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-center text-white">
      <div>
        <figure className="mx-auto max-w-screen-md text-center">
          <svg
            className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl font-medium italic text-white">
              Where would I be in 10 years if everything worked out for me
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">
            <img
              className="h-6 w-6 rounded-full"
              src={'/assets/candle.jpeg'}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 rtl:divide-x-reverse dark:divide-gray-700">
              <cite className="pe-3 font-medium text-white">Sage</cite>
              {/* <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Evelyn Nightshade
              </cite> */}
            </div>
          </figcaption>
        </figure>
      </div>
      {openModal && (
        <div className="fixed z-[2]">
          <Signup onClose={() => setModal(false)} />
        </div>
      )}
      <div
        onClick={() => {
          setModal(true);
        }}
        className="z-[1] mt-5"
      >
        <div className="group relative rounded-lg px-6 py-3 font-bold text-white">
          <span className="ease absolute inset-0 h-full w-full -translate-x-1 -translate-y-1 transform bg-purple-800 opacity-80 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="ease absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-pink-800 opacity-80 mix-blend-screen transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative">Start Your Journey</span>
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;
