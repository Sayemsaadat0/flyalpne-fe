"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CurveIcon } from '@/components/core/icons/publicIcon/QuotationIcon'


/* 
<div className='relative border'>
                <p className='text-w-title-4-Medium-48 z-20 relative'>Hello this is </p>
                <div className='absolute -top-2'>
                    <CurveIcon size={'128'} className='text-f-primary-1-300 ' />
                </div>
            </div>
*/
const HomeCategorySection = () => {
    const isLoading = false
    const categoryData = [
        {
            thumbnail: 'https://i.pinimg.com/736x/ad/9b/ab/ad9bab74c4457433da3d211b6be42cfb.jpg',
            title: 'Parachute',
            color: '#217989'
        },
        {
            thumbnail: 'https://i.ibb.co.com/rbTcY11/7.png',
            title: 'Bags',
            color: '#23d67e'
        },
        {
            thumbnail: 'https://i.ibb.co.com/rbTcY11/7.png',
            title: 'Jacket',
            color: '#ff4f27'
        },
        {
            thumbnail: 'https://i.ibb.co.com/rbTcY11/7.png',
            title: 'Jacket',
            color: '#ff4f27'
        },
        {
            thumbnail: 'https://i.ibb.co.com/rbTcY11/7.png',
            title: 'Jacket',
            color: '#ff4f27'
        },
    ]

    // const features = [
    //     {
    //         icon: <DashboardIcon size={'48'} />,
    //         title: "Free Delivery",
    //         description: "Orders from all item",
    //     },
    //     {
    //         icon: <DashboardIcon size={'48'} />,
    //         title: "Return & Refund",
    //         description: "Money back guarantee",
    //     },
    //     {
    //         icon: <DashboardIcon size={'48'} />,
    //         title: "Member Discount",
    //         description: "One very order over $140.00",
    //     },
    //     {
    //         icon: <DashboardIcon size={'48'} />,
    //         title: "Support 24/7",
    //         description: "Contact us 24 hours a day",
    //     },
    // ]

    return (
        <div className='space-y-20'>
            <div className='relative'>
                <p className='text-w-title-3-Medium-36 lg:text-w-title-4-Medium-48 z-20 relative text-f-black-500'>{`Top Categories`}</p>
                <div className='absolute -top-5 lg:-top-2'>
                    <CurveIcon size={'128'} className='text-f-primary-2-200 ' />
                </div>
            </div>
            <div className='flex justify-between max-w-[90%] mx-auto overflow-auto xl:overflow-hidden gap-10'>
                {isLoading ? (
                    <div className="flex items-center w-full  justify-center ">
                        {/* <Spinner size={'24'} /> */}
                        Loading...
                    </div>
                ) : (
                    categoryData.map((i) => (
                        <div
                            className='group'
                            key={Math.random()}
                        >
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

            {/* <motion.div
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                    ease: 'easeInOut',
                }}
            >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:space-x-4 p-5 border w-full rounded-[10px] bg-f-primary-1-50 ">
                            <p className='text-f-primary-1-600'>{feature.icon}</p>
                            <div>
                                <h3 className="text-w-title-1-Medium-22 font-bold">{feature.title}</h3>
                                <p className=" text-f-black-400">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div> */}
        </div >
    )
}

export default HomeCategorySection

