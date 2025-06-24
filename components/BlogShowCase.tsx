import Image from "next/image";
import {FaClock} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import {MdArrowOutward} from "react-icons/md";

const Posts = [
    {
        readTime: 6 ,
        date: 'February 20, 2025',
        h: 'How to Build a Good Relationship with Your Property Manager',
        img: '/assets/BlogShowCase/PostImg.png'
    },
    {
        readTime: 6 ,
        date: 'February 20, 2025',
        h: 'How to Build a Good Relationship with Your Property Manager',
        img: '/assets/BlogShowCase/PostImg.png'
    },
    {
        readTime: 6 ,
        date: 'February 20, 2025',
        h: 'How to Build a Good Relationship with Your Property Manager',
        img: '/assets/BlogShowCase/PostImg.png'
    }
];

export const BlogShowCase = () => {
    return (
        <section>
            <div className='container mx-auto flex flex-col'>
                <div className='gap-y-6 text-center flex flex-col items-center text-[#2A2A2A] pb-[50px]'>
                    <h2 className='leading-[94%] max-w-[564px]'>
                        Latest Insights and Updates from Our Blog
                    </h2>
                    <p className='text-[#52525B] max-w-[464px]'>
                        Insights, updates, and ideas to keep you ahead
                    </p>
                </div>
                <div className='flex justify-between items-baseline mb-3'>
                    <div className='bg-[#F4F4F499] rounded-lg p-[26px] min-w-[778px]'>
                        <div className='w-full relative h-[380px] rounded-lg mb-6'>
                            <Image src='/assets/BlogShowCase/FeaturedPostImg.png' alt='qwe' fill
                                   className='object-cover rounded-lg'/>
                        </div>
                        <h4 className=' text-[#2A2A2A] leading-[100%] mb-6'>
                            Tenant Retention: 6 Proven Steps to Keep Your Tenants Happy
                        </h4>
                        <span className='text-[16px] font-normal text-[#52525B]'>February 20, 2025</span>
                    </div>
                    <div className='bg-[#F4F4F499] rounded-lg p-[26px] min-w-[778px]'>
                        <div className='w-full relative h-[380px] rounded-lg mb-6'>
                            <Image src='/assets/BlogShowCase/FeaturedPostImg.png' alt='qwe' fill
                                   className='object-cover rounded-lg'/>
                        </div>
                        <h4 className=' text-[#2A2A2A] leading-[100%] mb-6'>
                            Tenant Retention: 6 Proven Steps to Keep Your Tenants Happy
                        </h4>
                        <div className='flex items-center justify-between'>
                            <span className='text-[16px] font-normal text-[#52525B]'>February 20, 2025</span>
                            <span
                                className='text-[16px] font-normal text-[#52525B] flex items-center gap-x-2'><FaClock/> 6 min read</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 pb-[60px] items-center'>
                    {Posts.map((item, index) => (
                        <div key={index} className='bg-[#F4F4F499] p-5 rounded-lg'>
                            <div className='w-full relative h-[254px] rounded-lg mb-4'>
                                <Image src={item.img} alt='qwe' fill className='object-cover'/>
                            </div>
                            <h4 className='text-[#2A2A2A] leading-[100%] mb-6'>
                                {item.h}
                            </h4>
                            <div className='flex items-center justify-between'>
                                <span className='text-[16px] font-normal text-[#52525B]'>{item.date}</span>
                                <span
                                    className='text-[16px] font-normal text-[#52525B] flex items-center gap-x-2'><FaClock/> {item.readTime} min read</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-center'>
                    <button
                        className='flex min-w-[168px] rounded-full text-[#2A2A2A] justify-center px-7 py-5 bg-transparent border-1 border-[#2A2A2A] transition-all duration-300'>
                        <Link href='/'
                              className='flex items-center justify-center gap-x-3 group hover:gap-x-10 transition-all duration-300'>
                            <span className='font-medium text-[16px] transition-all duration-300'>Read more</span>
                            <MdArrowOutward
                                className="transition-transform duration-300 group-hover:translate-x-4 transition-all text-2xl"/>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}