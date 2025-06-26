"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const StickyHeader = ()=> {
    const topHeaderRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isStuck, setIsStuck] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const el = topHeaderRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsStuck(!entry.isIntersecting),
            { threshold: 0.0 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div
                ref={topHeaderRef}
                className="bg-[#1A1A1A] text-white text-sm tracking-wide z-40 sticky top-[98px]"
            >
                <div className="container mx-auto py-6 flex items-center justify-between">
                    <Image src="/assets/80BondLogo.svg"  className='object-contain' width={200} height={40} alt='2blHeadLogImg'/>
                    <nav className="flex items-center text-white gap-[30px] text-[16px]">
                        <div className='space-x-6'>
                            <a href="#aboutSec" className="hover:text-gray-300 text-[16px]">About</a>
                            <a href="#" className="hover:text-gray-300 text-[16px]">Amenities</a>
                            <a href="#" className="hover:text-gray-300 text-[16px]">Suites</a>
                            <a href="#" className="hover:text-gray-300 text-[16px]">Neighbourhood</a>
                            <a href="#" className="hover:text-gray-300 text-[16px]">Gallery</a>
                        </div>
                        <div className='space-x-2.5'>
                            <a href="#"
                               className="bg-white text-[#1A1A1A] font-medium px-4 py-2 rounded-full hover:bg-gray-100">Sch
                                a tour</a>
                            <a href="#"
                               className="bg-white text-[#1A1A1A] font-medium px-4 py-2 rounded-full hover:bg-gray-100">Apply</a>
                        </div>
                    </nav>
                </div>
            </div>
            <section className="relative z-20 bg-white border-t border-gray-200" id='aboutSec'>
                <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 items-start gap-8">
                    <div>
                        <h2 className="text-[68px] font-bold text-[#1D3D5C] leading-tight mb-[50px]">
                            This Bond takes living<br /> to a whole new level
                        </h2>
                        <div className="text-[18px] text-gray-700 leading-relaxed max-w-[580px] gap-6 flex flex-col">
                            <p>
                                Suites feature 9’ and higher ceilings (as per plan), individual climate control, and
                                floor-to-ceiling windows that dim for privacy, smart/home control of your environment
                                and security, hi-speed internet, stainless steel appliances and in-suite
                                laundry.
                            </p>
                            <p>
                                80 Bond also features underground parking and onsite property management, as well as an
                                unmatched range of amenities including: gym, fully-equipped gym, business centre, party
                                room, terrace, dog wash and stunning, spacious lobby.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end overflow-hidden items-center flex-col select-none h-full">
                        <span
                            className="text-[560px] font-bold -mb-24 text-[#d1dfe8] leading-none flex justify-end">80</span>
                    </div>
                </div>
            </section>
        </>
    );
}