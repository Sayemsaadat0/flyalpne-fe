import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartIcon, HeartIcon, StarIcon } from '../icons/publicIcon/PublicPageIcons';
import { Button } from '@/components/ui/button';

// Define the type for the component's props
export type OfferProductCardType = {
  title: string;
  thumbnail: string;
  url: string;
};

// Use FC with OfferProductCardProps for typing the component
const OfferProductCard: FC<OfferProductCardType> = ({ title, thumbnail, url }) => {
  return (
    <div className="bg-f-white-50 border  rounded-[20px] transition-all   overflow-hidden   group">
      <div className="flex flex-col-reverse lg:flex-row">
        <Link href={url} className="w-full lg:max-w-[250px] relative overflow-hidden ">
          <div className="z-20 h-full lg:max-w-[250px] w-full border">
            <Image
              className="w-full h-full  aspect-[1/1] object-cover"
              src={thumbnail || 'https://placehold.co/480x437/e2e2db/black/png'}
              alt="OfferProductCard image"
              width={250}
              height={250}
            />
          </div>
          <p className="bg-f-primary-2-300 h-fit px-5 rounded-br-full absolute top-0">Save 15%</p>
          <div className="w-full  cursor-pointer  h-full lg:w-[350px] aspect-[1/1] absolute  transition-all right-[1000px] group-hover:right-0  flex p-5 flex-col gap-y-3 items-end top-0 bg-f-black-900/30   duration-700">
            <p className="p-1  rounded-[10px] text-f-primary-1-800 bg-f-primary-1-50/50">
              {/* <DashboardIcon size={'32'} /> */}
            </p>
            <p className="p-1  rounded-[10px] text-f-primary-1-800 bg-f-primary-1-50/50">
              <HeartIcon size={'32'} />
            </p>
            <p className="p-1  rounded-[10px] text-f-primary-1-800 bg-f-primary-1-50/50">
              {/* <DashboardIcon size={'32'} /> */}
            </p>
          </div>
        </Link>

        <div className="p-3 flex   flex-col justify-between  w-full">
          <Link className="space-y-3 h-full w-full" href={url}>
            <div className="space-y-2">
              <p className="w-fit px-5 py-0.5 bg-f-primary-1-50  text-f-primary-1-700 rounded-[5px] text-sm">
                In Stock
              </p>
              <p className="text-oc-primary-1-500 text-w-paragraph-regular-20 font-bold  leading-7 line-clamp-2 ">
                {title || 'Neck joint'}
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <p className="flex items-center gap-1 font-semibold text-f-black-600">
                  {' '}
                  <span className="text-amber-500">
                    <StarIcon />
                  </span>{' '}
                  4.5
                </p>
                <p className="text-sm text-f-black-600">50 Reviews</p>
              </div>
            </div>

            <div>
              <p className="leading-4 text-sm ">
                1. Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
              <p className="leading-4 text-sm ">
                2. Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
            </div>
          </Link>
          <div className="flex justify-between items-center mt-5">
            <p className="font-semibold text-w-title-1-Medium-22 text-f-primary-2-500">500৳</p>
            <Button> {<CartIcon />} Add</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferProductCard;
