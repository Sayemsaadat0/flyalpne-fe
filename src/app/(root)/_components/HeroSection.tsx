"use client"
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useRef } from 'react';

import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/legacy/image';
import ArrowIcon from '@/components/core/icons/publicIcon/ArrowIcon';
import { motion } from 'framer-motion';
import { FeaturedProductType } from '@/model/heroBanner.model';
import { Button } from '@/components/ui/button';




const BigFeaturedSection = () => {

    const swiperRef = useRef(null);
    const isLoading = false
    return <div
        className="px-0 rounded-[20px] "
    >
        <div className="relative  rounded-[20px] ">
            <Swiper
                speed={1500}
                loop
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                ref={swiperRef}
                modules={[Pagination, Navigation, Autoplay]}
                // navigation={true}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                className="mySwiper w-full rounded-[15px] "
            >
                <>

                    {isLoading ? (
                        <div className="flex items-center w-full justify-center ">
                            Loading .....
                            {/* <Spinner size={'24'} /> */}
                        </div>
                    ) : (
                        [...new Array(5)].map((i: FeaturedProductType) => (
                            <SwiperSlide
                                className="w-full  relative rounded-[15px] overflow-hidden"
                                key={Math.random()}
                            >
                                <div>
                                    <Link
                                        href={`/arts/`}
                                        className="items-center rounded-[15px]   w-full relative justify-center p-0"
                                    >
                                        {/* 
                                    https://i.ibb.co.com/rbTcY11/7.png
                                    https://i.ibb.co.com/rbGSz29/8.png
                                    */}
                                        <Image
                                            className=" object-cover rounded-[15px] "
                                            src={i?.thumbnail || 'https://i.ibb.co.com/fnnw7cm/Kazi-Tour.png'}
                                            alt="title"
                                            width={1000}
                                            height={500}
                                            layout="responsive"
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN80qBbDwAF8wISMCMGawAAAABJRU5ErkJggg=="
                                        />
                                    </Link>
                                    <div className='absolute z-20 top-1/2 left-1/2 md:left-96 lg:left-80 xl:left-96 lg:w-[70%] xl:w-[60%] -translate-x-1/2 -translate-y-1/2'>
                                        <motion.div
                                            className='space-y-5  w-full'
                                            initial={{ y: 120, x: 100, opacity: 0 }}
                                            whileInView={{ y: 0, x: 0, opacity: 1 }}
                                            // transition={{
                                            //     type: 'spring',
                                            //     stiffness: 100,
                                            //     damping: 25,
                                            //     ease: 'easeInOut',
                                            // }}
                                        >
                                            <div className='space-y-2'>
                                                <h1 className=' text-w-title-1-Medium-22 sm:text-w-header-3-bold-42 md:text-w-header-4-bold-56 md:leading-[60px] lg:leading-[48px] leading-8 xl:text-w-header-4-bold-56 xl:leading-[60px] text-center lg:text-left'>Which one <span className='text-f-primary-1'>headphone</span> must you buy?</h1>
                                            </div>
                                            <div className='flex justify-center items-center lg:justify-start'>
                                                <Link href={'/'}>
                                                    <Button> Discover</Button>
                                                </Link>
                                            </div>
                                        </motion.div>

                                    </div>
                                </div>
                            </SwiperSlide>

                        ))
                    )}
                </>
                {/* className="slider-controler" */}
            </Swiper>
            <div className="hidden lg:block">
                <div className="swiper-button-prev  bg-f-primary-1-100/50  transition-all group  absolute translate-y-1/2 hover:bg-f-primary-1-300/50">
                    <span>
                        <ArrowIcon className="rotate-180  text-f-primary-1" />
                    </span>
                </div>
                <div className="swiper-button-next bg-f-primary-1-100/50  transition-all group  absolute  translate-y-1/2 hover:bg-f-primary-1-300/50">
                    <span>
                        <ArrowIcon className=" text-f-primary-1" />
                    </span>
                </div>
            </div>
        </div>
    </div>
}



// Default Container 

const HeroSection = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden  gap-10">
                {/* Big Featured Section on the Left */}
                <div className=" lg:col-span-3 h-full">
                    <BigFeaturedSection />
                </div>

                {/* Four Small Images on the Right */}
                <div className="lg:col-span-2 h-full">
                    <div className="gap-5 grid grid-cols-2 h-full">
                        {/* Image 1 */}
                        <div>
                            <Image
                                className=" object-cover  rounded-[15px]"
                                src="https://i.pinimg.com/736x/02/85/a1/0285a1f19dd89e5bd22a56cbda7c68db.jpg"
                                alt="title"
                                width={400}
                                layout='responsive'
                                objectFit='cover'
                                height={300}
                            />
                        </div>

                        {/* Image 2 */}
                        <div>
                            <Image
                                className=" object-cover  rounded-[15px]"
                                src="https://i.pinimg.com/enabled_lo_mid/736x/c3/ef/ad/c3efad981cb4b7cb45730c5de5084513.jpg"
                                alt="title"
                                width={400}
                                layout='responsive'
                                objectFit='cover'
                                height={300}
                            />
                        </div>

                        {/* Image 3 */}
                        <div >
                            <Image
                                className=" object-cover  rounded-[15px]"
                                src="https://i.pinimg.com/736x/4a/d7/08/4ad70842acbfaa54cbba7e5a15febca5.jpg"
                                alt="title"
                                width={400}
                                layout='responsive'
                                objectFit='cover'
                                height={300}
                            />
                        </div>

                        {/* Image 4 */}
                        <div >
                            <Image
                                className=" object-cover  rounded-[15px]"
                                src="https://i.pinimg.com/enabled_lo_mid/736x/83/8f/4b/838f4b35138ae890a7ce88fe77f2a3ce.jpg"
                                alt="title"
                                width={400}
                                layout='responsive'
                                objectFit='cover'
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HeroSection;