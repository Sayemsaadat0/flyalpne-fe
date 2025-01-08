'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CurveIcon } from '@/components/core/icons/publicIcon/QuotationIcon';

/* 
<div className='relative border'>
                <p className='text-w-title-4-Medium-48 z-20 relative'>Hello this is </p>
                <div className='absolute -top-2'>
                    <CurveIcon size={'128'} className='text-f-primary-1-300 ' />
                </div>
            </div>
*/
const TopBrands = () => {
  const isLoading = false;
  const categoryData = [
    {
      thumbnail: 'https://i.pinimg.com/736x/ad/9b/ab/ad9bab74c4457433da3d211b6be42cfb.jpg',
      title: 'Brand 1',
      color: '#217989',
    },
    {
      thumbnail: 'https://i.ibb.co.com/rbTcY11/7.png',
      title: 'Brand 2',
      color: '#23d67e',
    },
    {
      thumbnail: 'https://i.ibb.co.com/rbTcY11/7.png',
      title: 'Brand 3',
      color: '#ff4f27',
    },
    {
      thumbnail: 'https://i.ibb.co.com/rbTcY11/7.png',
      title: 'Brand 4',
      color: '#ff4f27',
    },
    {
      thumbnail: 'https://i.ibb.co.com/rbTcY11/7.png',
      title: 'Brand 5',
      color: '#ff4f27',
    },
  ];

  return (
    <div className="space-y-20">
      <div className="relative">
        <p className="text-w-title-3-Medium-36 lg:text-w-title-4-Medium-48 z-20 relative text-f-black-500">{`Top Brands`}</p>
        <div className="absolute -top-5 lg:-top-2">
          <CurveIcon size={'128'} className="text-f-primary-2-200 " />
        </div>
      </div>
      <div className="flex justify-between max-w-[90%] mx-auto overflow-auto xl:overflow-hidden gap-10">
        {isLoading ? (
          <div className="flex items-center w-full  justify-center ">
            {/* <Spinner size={'24'} /> */}
            Loading...
          </div>
        ) : (
          categoryData.map((i) => (
            <div className="group" key={Math.random()}>
              <Link
                href={`/`}
                className="relative  inset-0  w-28 h-28 md:min-w-48 md:h-48 aspect-[1/1] inline-block shrink-0  p-0  duration-700 space-y-3"
              >
                <Image
                  className="inset-0 w-full h-full inline-block shrink-0 object-cover rounded-full object-right hover:rotate-[360deg] transition-all duration-700 "
                  src={i?.thumbnail || 'https://i.ibb.co.com/rbTcY11/7.png'}
                  alt="title"
                  width={400}
                  height={400}
                />
                <div>
                  <h4
                    className="line-clamp-1 text-center text-w-paragraph-regular-20 md:text-w-title-2-Medium-28 transition-colors duration-1000 group-hover:text-[var(--hover-color)]"
                    style={
                      {
                        '--hover-color': i.color,
                      } as React.CSSProperties & { '--hover-color'?: string }
                    }
                  >
                    {i.title}
                  </h4>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopBrands;
