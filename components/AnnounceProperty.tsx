'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import {MdArrowOutward} from "react-icons/md";

interface Property {
    name: string;
    address: string;
    dev: string;
    towers: string;
    est: string;
    av: string;
    link: string;
}

const Properties: Property[] = [
    {
        name: 'Town Centre Place',
        address: '1680 Brimley Rd, Toronto',
        dev: 'Atria Development',
        towers: '4',
        est: 'Fall 2026',
        av: '/assets/AnnounceProperty/TownCentre.png',
        link: '/',
    },
    {
        name: 'NEO',
        address: '1680 Brimley Rd, Toronto',
        dev: 'Atria Development',
        towers: '4',
        est: 'Fall 2026',
        av: '/assets/AnnounceProperty/TownCentre.png',
        link: '/',
    },
    {
        name: '80 Bond',
        address: '1680 Brimley Rd, Toronto',
        dev: 'Atria Development',
        towers: '4',
        est: 'Fall 2026',
        av: '/assets/AnnounceProperty/TownCentre.png',
        link: '/',
    },
    {
        name: '100 Bond',
        address: '1680 Brimley Rd, Toronto',
        dev: 'Atria Development',
        towers: '4',
        est: 'Fall 2026',
        av: '/assets/AnnounceProperty/TownCentre.png',
        link: '/',
    },
    {
        name: 'George street lofts',
        address: '1680 Brimley Rd, Toronto',
        dev: 'Atria Development',
        towers: '4',
        est: 'Fall 2026',
        av: '/assets/AnnounceProperty/TownCentre.png',
        link: '/',
    },
    {
        name: 'Y Loft',
        address: '1680 Brimley Rd, Toronto',
        dev: 'Atria Development',
        towers: '4',
        est: 'Fall 2026',
        av: '/assets/AnnounceProperty/TownCentre.png',
        link: '/',
    },
];

interface AnnouncePropertyProps {
    names: string | string[];
    src?: string;
}

export const AnnounceProperty = ({ names, src }: AnnouncePropertyProps) => {
    const namesArray = Array.isArray(names) ? names : [names];
    const filteredProperties = Properties.filter((property) =>
        namesArray.includes(property.name)
    );

    if (filteredProperties.length === 0) {
        return (
            <div className="py-8 text-center">
                <p>No properties found matching the provided names.</p>
            </div>
        );
    }

    return (
        <section className="py-[120px]">
            <div className="container mx-auto">
                {src ? (
                    <div className="flex items-center justify-between pb-[50px]">
                        <div className="flex flex-col gap-y-6">
                            <h2 className="leading-[94%] text-[#2A2A2A]">Featured Properties</h2>
                            <p className="text-[#52525B]">
                                Explore more properties and details at Atriadevelopment.ca
                            </p>
                        </div>
                        <div className="">
                            <Image
                                src={src}
                                alt="Banner"
                                width={240}
                                height={94}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="mb-8 text-center">
                        <h1 className="text-[#2A2A2A]">Featured Properties</h1>
                    </div>
                )}
                <div className="flex flex-col gap-5">
                    {filteredProperties.map((property, index) => (
                            <div key={index} className="bg-[#F4F4F499] rounded-xl overflow-hidden  flex p-[26px]">
                                <div className="flex-1 flex flex-col justify-between">
                                    <div className='gap-y-[40px] flex flex-col'>
                                        <h4 className="">{property.name}</h4>
                                        <div className="flex gap-x-10">
                                            <div className="flex-1 space-y-8">
                                                <h6 className="text-[#52525B] flex flex-col gap-y-[20px] font-inter">
                                                    Address:{' '}
                                                    <span className="text-[20px] text-[#2A2A2A]">
                                                    {property.address}
                                                </span>
                                                </h6>
                                                <h6 className="text-[#52525B] flex flex-col gap-y-[20px] font-inter">
                                                    Towers:{' '}
                                                    <span className="text-[20px] text-[#2A2A2A]">
                                                    {property.towers}
                                                </span>
                                                </h6>
                                            </div>
                                            <div className="flex-1 space-y-8">
                                                <h6 className="text-[#52525B] flex flex-col gap-y-[20px] font-inter">
                                                    Developer:{' '}
                                                    <span className="text-[20px] text-[#2A2A2A]">
                                                    {property.dev}
                                                </span>
                                                </h6>
                                                <h6 className="text-[#52525B] flex flex-col gap-y-[20px] font-inter">
                                                    Est. Completion:{' '}
                                                    <span className="text-[20px] text-[#2A2A2A]">
                                                    {property.est}
                                                </span>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className='flex w-[212px] px-7 py-5 rounded-full text-[#2A2A2A] text-white justify-center bg-[#093D5F] active:bg-[#0B3550] border-1 border-[#2A2A2A] transition-all duration-300'>
                                        <Link href={property.link}
                                              className='flex items-center justify-center gap-x-5 group hover:gap-x-10 transition-all duration-300'>
                                            <span className='font-medium text-[16px] transition-all duration-300'>Learn More</span>
                                            <MdArrowOutward
                                                className="transition-transform duration-300 group-hover:translate-x-4 transition-all text-2xl"/>
                                        </Link>
                                    </button>
                                </div>
                                <div className="relative w-[586px] h-[356px]">
                                    <Image
                                        src={property.av}
                                        alt={property.name}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </section>
    );
};