'use client'

import Image from 'next/image';
import { Nav } from './Nav';
import { PiPhoneThin } from 'react-icons/pi';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 680) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`py-5 fixed w-full z-[9999] transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex items-center gap-x-[50px]">
                        <div className="cursor-pointer">
                            <Link href="/">
                                <Image
                                    src="/assets/Logo.webp"
                                    alt="logo_img"
                                    width={174}
                                    height={36}
                                />
                            </Link>
                        </div>
                        <Nav/>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <a href="tel:+1234567890" className="cursor-pointer hover:scale-105 group duration-300 transition-all">
                            <button
                                className={`flex items-center border space-x-1 p-4 bg-white rounded-full cursor-pointer transition-all duration-300 ${
                                    isScrolled ? 'border-[#2A2A2A]' : 'border-transparent'
                                }`}>
                                <PiPhoneThin className='text-xl group-hover:scale-105 duration-300 transition-all'/>
                                <span className='text-[16px] group-hover:scale-105'>289.499.2632</span>
                            </button>
                        </a>
                        <a href="mailto:lease@prismpm.ca" className='cursor-pointer hover:scale-105 group duration-300 transition-all'>
                            <button
                                className="flex items-center p-4 bg-[#093D5F] text-white rounded-full cursor-pointer">
                                <span className='text-[16px] group-hover:scale-105 duration-300 transition-all'>lease@prismpm.ca</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};