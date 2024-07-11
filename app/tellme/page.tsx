'use client';
import React, { useState } from 'react';

type Props = {};

const TellMe = (props: Props) => {
  const [name, setName] = useState('');
  function chooseHouse() {}
  return (
    <div className="h-full md:h-screen">
      <div className="flex h-[5rem] items-center justify-center">
        <div>
          <p className="font-serif text-4xl font-bold text-white hover:cursor-pointer">
            Choose your Gate
          </p>
        </div>
      </div>
      <div className=" mt-10 flex items-center justify-center">
        <div className=" z-10 flex flex-col md:grid md:grid-cols-4 md:gap-4">
          <div className=" group w-[20rem] hover:cursor-pointer">
            <div className="relative flex items-center justify-center">
              <div className="">
                <img
                  className="h-[20rem] rounded-md group-hover:blur-sm "
                  src="/assets/houses/Elysium.png"
                  alt=""
                />
              </div>
              <div className="absolute hidden text-white group-hover:flex">
                Choose
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div>
                <p className="mt-3 text-2xl font-semibold">House of Elysium</p>
              </div>
            </div>
          </div>
          <div className=" group w-[20rem] hover:cursor-pointer">
            <div className="relative flex items-center justify-center">
              <div className="">
                <img
                  className="h-[20rem] rounded-md group-hover:blur-sm "
                  src="/assets/houses/Avalon.png"
                  alt=""
                />
              </div>
              <div className="absolute hidden text-white group-hover:flex">
                Choose
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div>
                <p className="mt-3 text-2xl font-semibold">House of Avalon</p>
              </div>
            </div>
          </div>
          <div className=" group w-[20rem] hover:cursor-pointer">
            <div className="relative flex items-center justify-center">
              <div className="">
                <img
                  className="h-[20rem] rounded-md group-hover:blur-sm "
                  src="/assets/houses/Valhalla.png"
                  alt=""
                />
              </div>
              <div className="absolute hidden text-white group-hover:flex">
                Choose
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div>
                <p className="mt-3 text-2xl font-semibold">House of Valhalla</p>
              </div>
            </div>
          </div>
          <div className=" group w-[20rem] hover:cursor-pointer">
            <div className="relative flex items-center justify-center">
              <div className="">
                <img
                  className="h-[20rem] rounded-md group-hover:blur-sm "
                  src="/assets/houses/Eldoria.jpg"
                  alt=""
                />
              </div>
              <div className="absolute hidden bg-blue-400 p-3 text-white group-hover:flex">
                Choose
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div>
                <p className="mt-3 text-2xl font-semibold">House of Eldoria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TellMe;
