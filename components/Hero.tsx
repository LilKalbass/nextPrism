'use client'

import Image from 'next/image'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HeroCarouselSlides = [
    {
        src: '/assets/Hero/SlideImg.png'
    },
    {
        src: '/assets/Hero/SlideImg.png'
    },
    {
        src: '/assets/Hero/SlideImg.png'
    },
    {
        src: '/assets/Hero/SlideImg.png'
    },
    {
        src: '/assets/Hero/SlideImg.png'
    },
];

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = HeroCarouselSlides.length;

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentSlide(swiper.realIndex + 1);
    };

    return (
        <section className='relative'>
            <div className='container mx-auto overflow-visible'>
                <div className='flex'>
                    {/* Fixed left content */}
                    <div className='flex flex-col justify-between flex-1'>
                        <div className='gap-y-6 flex flex-col pt-[184px] pb-[44px]'>
                            <h1 className='leading-[84%] font-bold max-w-[742px]'>
                                Four Communities. One Standard of Living.
                            </h1>
                            <p className='text-[#6D6D6D] text-[16px] max-w-[414px]'>
                                Spacious, modern units across four unique buildings — thoughtfully designed for comfort
                                and connection.
                            </p>
                        </div>
                        <button
                            className='flex w-[212px] rounded-full text-[#2A2A2A] text-white justify-center bg-[#093D5F] active:bg-[#0B3550] border-1 border-[#2A2A2A] transition-all duration-300'>
                            <Link href='/'
                                  className='p-[18px] flex items-center justify-center gap-x-5 group hover:gap-x-10 transition-all duration-300'>
                                <span className='font-medium text-[16px] transition-all duration-300'>Explore Now</span>
                                <MdArrowOutward
                                    className="transition-transform duration-300 group-hover:translate-x-4 transition-all text-2xl"/>
                            </Link>
                        </button>
                        <div className='pb-[60px] flex items-center justify-between relative'>
                            <div className='flex items-center gap-x-5'>
                                <button className='custom-prev bg-[#F4F4F499] p-4 rounded-full cursor-pointer'>
                                    <FaArrowLeft className='text-xl'/>
                                </button>
                                <button className='custom-next bg-[#F4F4F499] p-4 rounded-full cursor-pointer'>
                                    <FaArrowRight className='text-xl'/>
                                </button>
                            </div>
                            <div
                                className='flex text-[14px] gap-x-1 translate-x-[60px] items-center transition-all duration-300'>
                                <span>0{currentSlide}</span>
                                <span className='font-bold'> / </span>
                                <span>0{totalSlides}</span>
                            </div>
                        </div>
                    </div>

                    {/* Slider with only images */}
                    <div className='w-[864px] h-[780px] translate-x-[170px]'>
                        <Swiper
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.custom-prev',
                                nextEl: '.custom-next',
                            }}
                            modules={[Navigation]}
                            onSlideChange={handleSlideChange}
                            className='h-full'
                        >
                            {HeroCarouselSlides.map((item, id) => (
                                <SwiperSlide key={id}>
                                    <div className='relative w-full h-full '>
                                    <Image
                                            src={item.src}
                                            alt='slide image'
                                            fill
                                            className='object-cover '
                                            priority
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>


                </div>
            </div>
        </section>
    )
}
