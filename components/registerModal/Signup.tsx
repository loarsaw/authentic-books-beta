'use client';
import axios from 'axios';
import React, { useState } from 'react';

type Props = {
  onClose: () => void;
};

const Signup = ({ onClose }: Props) => {
  const [mail, setMail] = useState('abc@gmail.com');

  function sendMe() {
    const mailData = new FormData();
    mailData.append('mail', mail);
    axios.post('/api/inform', mailData).then(() => {
      
    });
  }
  return (
    <div className="bg-transparent backdrop-blur-md ">
      <div className=" z-50 h-[calc(100%-1rem)]  max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-transparent md:inset-0">
        <div className="relative max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg hue-rotate-60">
            <div className="flex w-[20rem] items-center justify-between  rounded-t border-b p-4 dark:border-gray-600 md:p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Transform your life
              </h3>
              <button
                onClick={onClose}
                type="button"
                className="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <button
                  onClick={sendMe}
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Start
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
