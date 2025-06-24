'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import {MdArrowOutward} from "react-icons/md";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email) {
            alert('Please enter an email address');
            return;
        }

        console.log('Submitted email:', email);

        setEmail('');
    };

    return (
        <footer className='bg-[#093D5F] pt-[58px] pb-[26px] text-white'>
            <div className='container mx-auto'>
                <div className='flex justify-between pb-[60px]'>
                    <div className='flex flex-col justify-between min-w-[40%]'>
                        <div className='flex flex-col gap-y-[36px]'>
                            <div className='relative w-[430px] h-[108px]'>
                                <Image src='/assets/LogoFooter.png' alt='PrismPm' fill className='object-cover'/>
                            </div>
                            <p className='max-w-[386px]'>
                                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                            </p>
                        </div>
                        <div className='flex flex-col gap-y-8'>
                            <h5 className='font-inter'>Latest News & Events</h5>
                            <form onSubmit={handleSubmit} className='flex w-full gap-x-2.5'>
                                <input
                                    placeholder='enter your email address'
                                    className='border rounded-full placeholder:text-[#E0E0E0] w-[380px] w-full placeholder:p-5 focus:outline-none focus:ring-2 focus:ring-white'
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="duration-300 text-[16px] group font-medium cursor-pointer bg-white active:bg-[#E0E0E0] px-7 py-5 rounded-full min-w-[160px] text-[#2A2A2A] flex items-center justify-center gap-x-3 hover:gap-x-8 transition-all duration-300 overflow-hidden">
                                    <span className="transition-all duration-300 font-medium text-[16px]">Submit</span>
                                    <MdArrowOutward className="transition-transform duration-300 group-hover:translate-x-3 text-2xl"/>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='flex flex-col min-w-[50%] text-[18px]'>
                        <p>Customer Care</p>
                        <a href="mailto:customercare@prismpm.ca" className='cursor-pointer'>
                            <h2 className=''>customercare@prismpm.ca</h2>
                        </a>
                        <div className='flex pt-[60px] justify-between'>
                            <div className='flex flex-col gap-y-[60px]'>
                                <div className='flex flex-col'>
                                    <h5 className='mb-4 font-inter'>Leasing Inquiries</h5>
                                    <div className='flex flex-col gap-y-1.5'>
                                        <Link href='/'>
                                            80 Bond
                                        </Link>
                                        <Link href='/'>
                                            80 Bond
                                        </Link>
                                        <Link href='/'>
                                            80 Bond
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h5 className='mb-4 font-inter'>Leasing Inquiries</h5>
                                    <div className='flex flex-col gap-y-1.5'>
                                        <Link href='/'>
                                            80 Bond
                                        </Link>
                                        <Link href='/'>
                                            80 Bond
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <h5 className='mb-4 font-inter'>Leasing Inquiries</h5>
                                    <div className='flex flex-col gap-y-1.5'>
                                        <Link href='/'>
                                            80 Bond
                                        </Link>
                                        <Link href='/'>
                                            80 Bond
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between min-w-[300px]'>
                                <div className='flex flex-col'>
                                    <h5 className='mb-4 font-inter'>Leasing Inquiries</h5>
                                    <div className='flex flex-col'>
                                        <span>80 Bond St E</span>
                                        <span>Oshawa ON L1G 0E6</span>
                                    </div>
                                </div>
                                <div className='flex flex-col mr-8'>
                                    <h5 className='mb-4 font-inter'>Leasing Inquiries</h5>
                                    <div className='flex flex-col gap-y-1.5 text-[18px]'>
                                        <div className='flex items-center gap-x-[30px]'>
                                            <span>Mon.</span>
                                            <p>9:00 am - 5:00 pm </p>
                                        </div>
                                        <div className='flex items-center gap-x-[30px]'>
                                            <span>Tue.</span>
                                            <p>9:00 am - 5:00 pm </p>
                                        </div>
                                        <div className='flex items-center gap-x-[30px]'>
                                            <span>Wed.</span>
                                            <p>9:00 am - 5:00 pm </p>
                                        </div>
                                        <div className='flex items-center gap-x-[30px]'>
                                            <span>Thu.</span>
                                            <p>9:00 am - 5:00 pm </p>
                                        </div>
                                        <div className='flex items-center gap-x-[30px]'>
                                            <span>Fri.</span>
                                            <p>9:00 am - 5:00 pm </p>
                                        </div>
                                        <div className='flex items-center gap-x-[30px]'>
                                            <span>Sat.</span>
                                            <p>9:00 am - 5:00 pm </p>
                                        </div>
                                        <div className='flex items-center gap-x-[30px]'>
                                            <span>Sun.</span>
                                            <p>9:00 am - 5:00 pm </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between text-[#E0E0E0] text-[18px]'>
                    <p className=''>
                        &copy;{currentYear} by Prism Property Management. All rights reserved. Designed by Enjoyable Agency.
                    </p>
                    <div className='flex items-center gap-x-5'>
                        <Link href='/'>
                            Terms of use
                        </Link>
                        <Link href='/'>
                            Privacy Police
                        </Link>
                        <Link href='/'>
                            Accessibility
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}