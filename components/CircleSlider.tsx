'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";

const images = [
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
    '/assets/CircleSlider/ff.png',
];

export const CircleSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                centeredSlides={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                modules={[Autoplay]}
                loop={true}
                className="w-full mb-[120px]"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className='flex justify-center items-center'>
                        <div className="flex justify-center rounded-full transition-all relative w-[300px] h-[300px] overflow-hidden">
                            <Image
                                src={image}
                                alt={`Room ${index + 1}`}
                                className="object-cover"
                                width={300}
                                height={300}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

