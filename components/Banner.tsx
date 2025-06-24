import Link from "next/link";
import React from "react";
import {MdArrowOutward} from "react-icons/md";

export const Banner = () => {
    return (
        <section className='bg-[#093D5F] py-[146px]'>
            <div className='container mx-auto flex flex-col items-center gap-y-20'>
                <div className='text-center text-[#E0E0E0] max-w-[910px] items-center flex flex-col gap-y-4'>
                    <h6 className='leading-[108%] font-inter'>
                        Who we are ?
                    </h6>
                    <h2 className='text-white leading-[94%] mb-2'>
                        Prism Property Management Provides Trusted, Professional Service Across Four Residential
                        Communities In Southern Ontario.
                    </h2>
                    <p className='max-w-[600px]'>
                        At Prism Property Management, we’ve been proudly serving communities across Southern Ontario for
                        nearly four decades.
                    </p>
                </div>
                <button
                    className='duration-300 flex min-w-[212px] rounded-full text-[#2A2A2A] px-7 py-5 justify-center bg-white active:bg-[#E0E0E0] border-1 border-[#2A2A2A] transition-all'>
                    <Link href='/'
                          className='flex items-center justify-center gap-x-3 group hover:gap-x-10 transition-all duration-300'>
                        <span className='font-medium text-[16px] transition-all duration-300'>Learn More</span>
                        <MdArrowOutward
                            className="transition-transform duration-300 group-hover:translate-x-5 transition-all text-2xl "/>
                    </Link>
                </button>
            </div>
        </section>
    );
};