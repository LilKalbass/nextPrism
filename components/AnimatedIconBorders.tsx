"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { FaWalking, FaBicycle } from "react-icons/fa";
import type { ReactNode } from "react";

const RADIUS = 60;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ≈ 377

const circleVariants: Variants = {
    hidden: { strokeDashoffset: CIRCUMFERENCE },
    visible: (custom: number) => ({
        strokeDashoffset: CIRCUMFERENCE * (1 - custom),
        transition: { duration: 2.4, ease: "easeInOut" },
    }),
};

export const AnimatedIconBorders = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const renderScore = (
        Icon: ReactNode,
        score: number,
        label: string,
        percent: number
    ) => (
        <div className="relative w-[340px] h-[340px]">
            <svg
                className="transform -rotate-90 origin-center"
                width="340"
                height="340"
                viewBox="0 0 140 140"
            >
                {/* Gray background */}
                <circle
                    cx="70"
                    cy="70"
                    r={RADIUS}
                    stroke="#808080"
                    strokeWidth="6"
                    fill="transparent"
                />
                {/* Animated foreground */}
                <motion.circle
                    cx="70"
                    cy="70"
                    r={RADIUS}
                    stroke="#fff"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={CIRCUMFERENCE}
                    custom={percent}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={circleVariants}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white drop-shadow">
                <div className="text-[100px]">{Icon}</div>
            </div>
            <div className="flex items-end justify-center gap-2.5 mt-2">
                <span className="text-[40px] leading-[120%]">{score}</span>
                <p>{label}</p>
            </div>
        </div>
    );

    return (
        <section
            ref={ref}
            className="bg-[#093D5F] py-[100px] text-white text-center"
        >
            <div className="container mx-auto">
                <h2 className="text-center pb-[70px]">Now is the time. This is the place.</h2>
                <div className="flex justify-center gap-10 items-center pb-[80px] flex-wrap">
                    {renderScore(<FaWalking />, 95, "walk score", 0.95)}
                    {renderScore(<FaBicycle />, 80, "bike score", 0.8)}
                </div>

                <p className="max-w-[80%] mx-auto">
                    Oshawa has become one of Canada&apos;s most dynamic cities, known for its rapid population and
                    economic growth. Located in the heart of Ontario, the city offers modern living with
                    unparalleled access to the city&apos;s amenities and attractions, as well as an automotive hub.
                    Oshawa has evolved into a thriving community with booming sectors in health, education,
                    technology, and professional services. New developments, diverse dining, and retail options
                    are transforming Oshawa into one of Canada's most vibrant cities.
                </p>
            </div>
        </section>
    );
};
