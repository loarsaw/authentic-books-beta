'use client';
import React, { useEffect, useState } from 'react';

type Props = {};

const Timer = (props: Props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <div>
      <p>
        {minutes}:{remainingSeconds < 10 ? '0' : ''}
        {remainingSeconds}
      </p>
    </div>
  );
};

export default Timer;
