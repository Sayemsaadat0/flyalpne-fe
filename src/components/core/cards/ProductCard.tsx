import { FC } from 'react';
import Image from "next/image";
import Link from "next/link";
import { CartIcon, HeartIcon, StarIcon } from '../icons/publicIcon/PublicPageIcons';
import { Button } from '@/components/ui/button';

// Define the type for the component's props
export type ProductCardType = {
    title: string;
    thumbnail: string;
    url: string;
};

// Use FC with ProductCardProps for typing the component
const ProductCard: FC<ProductCardType> = ({ title, thumbnail, url }) => {
    return (
        <div className="bg-f-white-50 border rounded-[20px] transition-all   overflow-hidden md:max-w-[250px] group">
            <Link href={url} className="w-full  relative overflow-hidden ">
                <div className='z-20'>
                    <Image
                        className="w-full  aspect-[1/1] object-cover"
                        src={thumbnail || 'https://placehold.co/480x437/e2e2db/black/png'}
                        alt="ProductCard image"
                        width={480}
                        height={437}
                    />
                </div>
                <p className='bg-f-primary-2-300 h-fit px-5 rounded-br-full absolute top-0'>Save 15%</p>
                <div className='w-full  cursor-pointer  h-full md:w-[250px] aspect-[1/1] absolute  transition-all left-[1000px] group-hover:left-0  flex p-5 flex-col gap-y-3 items-end top-0 bg-f-black-900/30   duration-700'>
                    <p className='p-1  rounded-[10px] text-f-primary-1-800 bg-f-primary-1-50/50'>
                        {/* <DashboardIcon size={'32'} /> */}
                        </p>
                    <p className='p-1  rounded-[10px] text-f-primary-1-800 bg-f-primary-1-50/50'><HeartIcon size={'32'} /></p>
                    <p className='p-1  rounded-[10px] text-f-primary-1-800 bg-f-primary-1-50/50'>
                        {/* <DashboardIcon size={'32'} /> */}
                        </p>
                </div>
            </Link>
            <div className="p-3 flex flex-col justify-between xl:min-h-44 ">
                <Link className='space-y-3 ' href={url} >
                    <div className='space-y-2'>
                        <p className='w-fit px-5 py-0.5 bg-f-primary-1-50  text-f-primary-1-700 rounded-[5px] text-sm'>In Stock</p>
                        <p className="text-oc-primary-1-500 text-w-paragraph-regular-20 font-bold  leading-7 line-clamp-2 ">{title || 'Neck joint'}</p>
                    </div>
                    <div className='space-y-1'>
                        <div className='flex justify-between'>
                            <p className='flex items-center gap-1 font-semibold text-f-black-600'> <span className='text-amber-500'><StarIcon /></span> 4.5</p>
                            <p className='text-sm text-f-black-600'>50 Reviews</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-w-title-1-Medium-22 text-f-primary-2-500'>
                                500৳
                            </p>
                            <Button > {<CartIcon />} Add  </Button>
                        </div>
                    </div>
                </Link>
                <div className="w-full  group pt-2">
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
