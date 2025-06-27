"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export const StickyHeader = () => {
  const topHeaderRef = useRef<HTMLDivElement>(null);

  const handleScrollTo = (href:string) => {
    const element = document.getElementById(href);
    if (element) {
      const offset = 98;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { href: "aboutSec", text: "About", className: "hover:text-gray-300 text-[16px]" },
    { href: "Fishki", text: "Amenities", className: "hover:text-gray-300 text-[16px]" },
    { href: "forRentSec", text: "Suites", className: "hover:text-gray-300 text-[16px]" },
    { href: "neibWalkSec", text: "Neighbourhood", className: "hover:text-gray-300 text-[16px]" },
    { href: "Gallera", text: "Gallery", className: "hover:text-gray-300 text-[16px]" },
  ];

  const actionLinks = [
    { href: "tour", text: "Schedule a tour", className: "bg-white text-[#1A1A1A] font-medium px-4 py-2 rounded-full hover:bg-gray-100" },
    { href: "apply", text: "Apply", className: "bg-white text-[#1A1A1A] font-medium px-4 py-2 rounded-full hover:bg-gray-100" },
  ];

  return (
    <>
      <div
        ref={topHeaderRef}
        className="bg-[#1A1A1A] text-white text-sm tracking-wide z-40 sticky top-[98px]"
      >
        <div className="container mx-auto py-6 flex items-center justify-between">
          <Image
            src="/assets/80bond/80BondLogo.svg"
            className="object-contain"
            width={200}
            height={40}
            alt="2blHeadLogImg"
          />
          <nav className="flex items-center text-white gap-[30px] text-[16px]">
            <div className="space-x-6">
              {navLinks.map(({ href, text, className }) => (
                <Link
                  key={href}
                  href={`#${href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(href);
                  }}
                  className={className}

                >
                  {text}
                </Link>
              ))}
            </div>
            <div className="space-x-2.5">
              {actionLinks.map(({ href, text, className }) => (
                <Link
                  key={href}
                  href={`#${href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(href);
                  }}
                  className={className}
                >
                  {text}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <section className="relative z-20 bg-white pt-[100px] overflow-hidden" id="aboutSec">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          <div className='pb-[100px]'>
            <h2 className="text-[68px] font-bold text-[#1D3D5C] leading-tight mb-[50px]">
              This Bond takes living<br /> to a whole new level
            </h2>
            <div className="text-[18px] text-gray-700 leading-relaxed max-w-[580px] gap-6 flex flex-col">
              <p>
                Suites feature 9’ and higher ceilings (as per plan), individual climate control, and
                floor-to-ceiling windows that dim for privacy, smart/home control of your environment
                and security, hi-speed internet, stainless steel appliances and in-suite laundry.
              </p>
              <p>
                80 Bond also features underground parking and onsite property management, as well as an
                unmatched range of amenities including: gym, fully-equipped gym, business centre, party
                room, terrace, dog wash and stunning, spacious lobby.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col select-none">
            <span className="text-[660px] text-[#849EAF] font-bold -mb-28 font-playf leading-none flex justify-end">
              80
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
