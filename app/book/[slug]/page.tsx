import React from 'react';

type Props = {};

const IndividualPost = (props: Props) => {
  return (
    <div className="flex h-full min-h-screen items-center justify-center text-white">
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
          <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
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
            <cite className="pe-3 font-medium text-gray-900 dark:text-white">
              Sage
            </cite>
            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
              Evelyn Nightshade
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default IndividualPost;
