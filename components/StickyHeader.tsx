"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyHeader() {
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
            {/* Bond Nav Bar */}
            <div
                ref={topHeaderRef}
                className="bg-black text-white text-sm font-medium tracking-wide z-40 sticky top-[98px]"
            >
                <div className="container mx-auto h-12 flex items-center justify-between">
                    <div className="uppercase tracking-widest text-sm">80 Bond</div>
                    <nav className="flex items-center space-x-6 text-white text-sm">
                        <a href="#" className="hover:text-gray-300 text-[16px]">About</a>
                        <a href="#" className="hover:text-gray-300 text-[16px]">Amenities</a>
                        <a href="#" className="hover:text-gray-300 text-[16px]">Suites</a>
                        <a href="#" className="hover:text-gray-300 text-[16px]">Neighbourhood</a>
                        <a href="#" className="hover:text-gray-300 text-[16px]">Gallery</a>
                        <a href="#" className="bg-white text-black px-4 py-1 rounded-full hover:bg-gray-100">Sch a tour</a>
                        <a href="#" className="bg-white text-black px-4 py-1 rounded-full hover:bg-gray-100">Apply</a>
                    </nav>
                </div>
            </div>

            {/* Sub-header Intro Section */}
            <section className="relative z-20 bg-white border-t border-gray-200">
                <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 items-start gap-8">
                    <div>
                        <h2 className="text-[68px] font-bold text-[#1D3D5C] leading-tight mb-6">
                            This Bond takes living<br /> to a whole new level
                        </h2>
                        <p className="text-sm text-gray-700 leading-relaxed max-w-[580px]">
                            Suites feature 9’ and higher ceilings (as per plan), individual climate control, and floor-to-ceiling windows that dim for privacy, smart/home control of your environment and security, hi-speed internet, stainless steel appliances and in-suite laundry.<br /><br />
                            80 Bond also features underground parking and onsite property management, as well as an unmatched range of amenities including: gym, fully-equipped gym, business centre, party room, terrace, dog wash and stunning, spacious lobby.
                        </p>
                    </div>
                    <div className="flex justify-end overflow-hidden items-center flex-col select-none h-full">
                        <span className="text-[560px] font-bold -mb-24 text-[#d1dfe8] leading-none flex justify-end">80</span>
                    </div>
                </div>
            </section>
        </>
    );
}