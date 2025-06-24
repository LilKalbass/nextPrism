import {FaFacebook, FaInstagram} from "react-icons/fa";
import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";

interface LinkItem {
    h: string;
    fbText?: string;
    fbIcon?: ReactNode;
    fbLink?: string;
    instText?: string;
    instIcon?: ReactNode;
    instLink?: string;
}

const Links: LinkItem[] = [
    {
        h: 'George Street Lofts',
        fbText: 'George street Lofts',
        fbIcon: <FaFacebook/>,
        fbLink:'/',
        instText: 'George street Lofts',
        instIcon: <FaInstagram/>,
        instLink:'/'
    },
    {
        h: 'George Street Lofts',
        fbText: 'George street Lofts',
        fbIcon: <FaFacebook/>,
        fbLink:'/',
        instText: 'George street Lofts',
        instIcon: <FaInstagram/>,
        instLink:'/'
    },
    {
        h: 'George Street Lofts',
        fbText: 'George street Lofts',
        fbIcon: <FaFacebook/>,
        fbLink:'/',
        instText: 'George street Lofts',
        instIcon: <FaInstagram/>,
        instLink:'/'
    },
    {
        h: 'George Street Lofts',
        fbText: 'George street Lofts',
        fbIcon: <FaFacebook/>,
        fbLink:'/',
        instText: 'George street Lofts',
        instIcon: <FaInstagram/>,
        instLink:'/'
    },
    {
        h: 'George Street Lofts',
        fbText: 'George street Lofts',
        fbIcon: <FaFacebook/>,
        fbLink:'/',
        instText: 'George street Lofts',
        instIcon: <FaInstagram/>,
        instLink:'/'
    },
    {
        h: 'PrismPm',
        fbText: 'PrismPm',
        fbIcon: <FaFacebook/>,
        fbLink:'/',
    },
];

export const Socials = () => {
    return (
        <section className='py-[120px]'>
            <div className='container mx-auto'>
                <div className='mx-auto max-w-[528px] text-[#2A2A2A] text-center space-y-6 pb-[50px]'>
                    <h2 className='leading-[94%]'>Follow Us On Social Media</h2>
                    <p className='text-[#52525B]'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                </div>
                <div className='flex pb-[30px] justify-between items-baseline'>
                    {Links.map((item, index) => (
                        <div key={index}>
                            <h6 className='font-inter text-[#52525B] mb-6'>{item.h}</h6>
                            <div className='gap-y-2.5 flex flex-col'>
                                {item.fbLink && (
                                    <Link href={item.fbLink} className='flex items-center gap-x-2.5'>
                                        <span className='text-2xl'>{item.fbIcon}</span>
                                        <span className='text-[18px]'>{item.fbText}</span>
                                    </Link>
                                )}
                                {item.instLink && (
                                    <Link href={item.instLink} className='flex items-center gap-x-2.5'>
                                        <span className='text-2xl'>{item.instIcon}</span>
                                        <span className='text-[18px]'>{item.instText}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full relative h-[556px]'>
                <Image src='/assets/Socials/FeaturedImg.png' alt='qwe' fill className='object-cover rounded-xl'/>
            </div>
        </section>
    )
}