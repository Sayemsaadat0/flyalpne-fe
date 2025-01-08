'use client';
// import { getCountdown } from '@/lib/TimeCountDown'; // Adjust the path
import React, { FC, useEffect, useState } from 'react';
import { ClockIcon } from '../icons/publicIcon/PublicPageIcons';

interface CountDownCardProps {
  target_date: string | Date; // Expect string or Date as input
}

const CountDownCard: FC<CountDownCardProps> = ({ target_date }) => {
  const [[days, hours, minutes, seconds], setCountdown] = useState<
    [number, number, number, number]
  >([0, 0, 0, 0]);

  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         const remainingTime = getCountdown(target_date);
  //         setCountdown(remainingTime);
  //     }, 1000);

  //     return () => clearInterval(interval);
  // }, [target_date]);

  return (
    <div
      className="flex lg:justify-end
         w-fit gap-2 text-w-paragraph-regular-20  flex-wrap p-2 rounded-[5px] lg:min-w-[450px] text-f-white-300"
    >
      <div className="space-x-1 bg-f-primary-2-500 p-1 w-fit rounded-md">
        <ClockIcon size={'24'} />
      </div>
      <div className="space-x-1 bg-f-primary-2-500 px-2 w-fit rounded-md">
        <span>{days}</span>
        <span>D</span>
      </div>
      <div className="space-x-1 bg-f-primary-2-500 px-2 rounded-md">
        <span className="value">{hours}</span>
        <span className="label">H</span>
      </div>
      <div className="space-x-1 bg-f-primary-2-500 px-2 rounded-md">
        <span className="value">{minutes}</span>
        <span className="label">M</span>
      </div>
      <div className="space-x-1 min-w-16 text-center bg-f-primary-2-500 px-2 rounded-md">
        <span className="value">{seconds}</span>
        <span className="label">s</span>
      </div>
    </div>
  );
};

export default CountDownCard;
