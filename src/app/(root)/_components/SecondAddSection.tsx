import Button from '@/components/ui/button2';
import { SearchIcon } from 'lucide-react';
import Image from 'next/legacy/image';
import React from 'react';

const SecondAddSection = () => {
  return (
    <div className="flex  flex-col md:flex-row items-center justify-center p-5 w-full bg-f-primary-1-50 rounded-[20px]">
      <div className="w-full  flex items-center justify-center">
        <Image
          className="aspect-[1/1] object-cover w-full"
          src={'/ITEM.png'}
          alt="ProductCard image"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full border space-y-10">
        <h3 className="text-w-header-1-bold-22  md:text-w-header-4-bold-56">
          Are You Missing Anything? <span className="text-f-primary-1-600">Explore</span> Travel
          Must-Haves!
        </h3>
        <Button icon={<SearchIcon />} label="Explore" />
      </div>
    </div>
  );
};

export default SecondAddSection;
