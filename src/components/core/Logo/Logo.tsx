// 'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className="w-40">
      <Link className="text-w-title-4-Medium-48 text-fly-white-200" href={'/'}>
        <Image
          className="object-cover w-full"
          src={'/Logo1.png'}
          alt="Logo"
          width={400}
          height={200}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
