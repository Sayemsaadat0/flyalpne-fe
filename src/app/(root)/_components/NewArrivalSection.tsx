"use client"
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { CurveIcon } from '@/components/core/icons/publicIcon/QuotationIcon'
import React from 'react'
import ProductCard from '@/components/core/cards/ProductCard';
import { ProductLoadingCard } from '@/components/core/cards/LoadingCard';

const NewArrivalSection = () => {
    const isLoading = false
    return (
        <div className=' bg-f-primary-1-50'>
            <div className='py-10 md:py-16 space-y-10 fly-commonContainer'>
                <div className='relative'>
                    <p className='text-w-title-3-Medium-36 lg:text-w-title-4-Medium-48 z-20 relative text-f-black-500'>New Arrival</p>
                    <div className='absolute -top-5 lg:-top-2'>
                        <CurveIcon size={'128'} className='text-f-primary-1-200 ' />
                    </div>
                </div>
                <section
                    className="mx-auto w-full "
                >
                    <Swiper
                        speed={1500}
                        loop
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            100: {
                                slidesPerView: 1.5,
                                centeredSlides: true,
                                spaceBetween: 7,
                            },
                            480: {
                                slidesPerView: 2.5,
                                centeredSlides: true,
                                spaceBetween: 7,
                            },
                            768: {
                                slidesPerView: 3.5,
                                centeredSlides: true,
                                spaceBetween: 20,
                            },
                            1000: {
                                slidesPerView: 4,
                                centeredSlides: true,
                                spaceBetween: 24,
                            },
                            1236: {
                                slidesPerView: 6,
                                centeredSlides: false,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper relative "
                    >
                        <>
                            {isLoading
                                ? [...new Array(6)].map(() => (
                                    <SwiperSlide key={Math.random()}>
                                        <ProductLoadingCard />
                                    </SwiperSlide>
                                ))
                                : !isLoading &&
                                [...new Array(10)].map(() => (
                                    <SwiperSlide className='mb-10' key={Math.random()}>
                                        <ProductCard
                                            url='/'
                                            thumbnail='https://i.ibb.co.com/rbTcY11/7.png'
                                            title='This is The Product Name'
                                        />
                                    </SwiperSlide>
                                ))}
                        </>
                    </Swiper>
                </section>
            </div>


            {/*  */}
     
        </div>
    )
}

export default NewArrivalSection