import Image from "next/image";
import {FaPaw} from "react-icons/fa";
import {AiOutlineArrowRight} from "react-icons/ai";
import {BiPlay} from "react-icons/bi";

export const ForRent = () => {
    const rentList = [
        {
            img: 'https://images.unsplash.com/photo-1750814195051-30092e3b03b4?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '1 Bed Loft in Downtown Peterborough',
            price: '$2,250',
            petFr: 1,
            beds: 1,
            batr: 1,
            sqFeet: 547.43,
            expNowLink: '/',
            bookAViewingLink: '/'
        },
        {
            img: 'https://images.unsplash.com/photo-1750814195051-30092e3b03b4?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '1 Bed Loft in Downtown Peterborough',
            price: '$2,250',
            petFr: 1,
            beds: 1,
            batr: 1,
            sqFeet: 547.43,
            expNowLink: '/',
            bookAViewingLink: '/'
        },
        {
            img: 'https://images.unsplash.com/photo-1750814195051-30092e3b03b4?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '1 Bed Loft in Downtown Peterborough',
            price: '$2,250',
            petFr: 1,
            beds: 1,
            batr: 1,
            sqFeet: 547.43,
            expNowLink: '/',
            bookAViewingLink: '/'
        },
    ];

    const mediaTourList = [
        {
            img: 'https://images.unsplash.com/photo-1750330079912-f94aff550e53?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '80 Bond - F3 : 3BR',
            desc: 'Explore 3D space',
            link: ''
        },
        {
            img: 'https://images.unsplash.com/photo-1735507582615-0321c88f6dbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '80 Bond - F3 : 3BR',
            desc: 'Explore 3D space',
            link: ''
        },
        {
            img: 'https://images.unsplash.com/photo-1750330079912-f94aff550e53?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '80 Bond - F3 : 3BR',
            desc: 'Explore 3D space',
            link: ''
        },
        {
            img: 'https://images.unsplash.com/photo-1750330079912-f94aff550e53?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '80 Bond - F3 : 3BR',
            desc: 'Explore 3D space',
            link: ''
        },
    ];



    return (
        <section className='bg-[#F7F9FA] py-[100px]' id='forRentSec'>
            <div className='container mx-auto flex flex-col gap-[50px]'>
                <div className='flex  flex-col gap-[50px]'>
                    <h2 className='text-[#1A1A1A] text-center'>For Rent</h2>
                    <div className='flex items-center justify-between'>
                        {rentList.map((item, index) => (
                            <div key={index} className='flex flex-col p-[26px] bg-white rounded-[8px] w-[510px]'>
                                <Image src={item.img} alt='qwe' width={510} height={300} className='object-cover h-[300px] rounded-[8px]'/>
                                <div className='flex flex-col gap-6 pb-[40px] pt-8'>
                                    <div className='flex items-center justify-between'>
                                        <h5 className='max-w-[320px]'>{item.title}</h5>
                                        <div className='flex flex-col items-end'>
                                            <span className='text-[30px] font-bold'>{item.price}</span>
                                            <span>month</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-1.5'>
                                        <span className='w-[12px] h-[12px] bg-[#27CA40] rounded-full'></span>
                                        <p>available</p>
                                    </div>
                                    <div className='flex flex-wrap gap-5 items-baseline'>
                                        {item.petFr ? (
                                            <div className="flex items-center gap-2 px-3 py-4 rounded-full bg-[#F7F9FA]">
                                                <FaPaw />
                                                <span>Pet Friendly</span>
                                            </div>
                                        ) : null}
                                        {item.beds ? (
                                            <div className="flex items-center gap-2 px-3 py-4 rounded-full bg-[#F7F9FA]">
                                                <FaPaw />
                                                <span>{item.beds} Bedroom</span>
                                            </div>
                                        ) : null}
                                        {item.batr ? (
                                            <div className="flex items-center gap-2 px-3 py-4 rounded-full bg-[#F7F9FA]">
                                                <FaPaw />
                                                <span>{item.batr} Bedroom</span>
                                            </div>
                                        ) : null}
                                        {item.sqFeet ? (
                                            <div className="flex items-center gap-2 px-3 py-4 rounded-full bg-[#F7F9FA]">
                                                <FaPaw />
                                                <span>{item.sqFeet}</span>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[10px] '>
                                    <a href={item.expNowLink}
                                       className='w-full py-5 bg-[#093D5F] rounded-full text-white justify-center flex items-center gap-2'>
                                        <span>Explore now</span>
                                        <AiOutlineArrowRight/>
                                    </a>
                                    <a href={item.expNowLink}
                                       className='w-full py-5 bg-transparent border-[#093D5F] border-2  rounded-full text-[#093D5F] justify-center flex items-center gap-2'>
                                        <span>Book a viewing</span>
                                        <AiOutlineArrowRight/>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center justify-between '>
                        {mediaTourList.map((item, index) => (
                            <a href={item.link} key={index} className= 'relative flex group'>
                                <Image src={item.img} alt='qwe' width={370} height={342} className='object-fit bg-transparent rounded-[8px] w-[370px] h-[342px]'/>
                                <div className='flex flex-col gap-5 items-center justify-center absolute inset-0 bg-black/15 rounded-[8px] text-white'>
                                    <span className='group-hover:scale-115 transition-all duration-300 flex items-center rounded-full justify-center w-[60px] h-[60px] bg-white'><BiPlay className='text-4xl text-[#1A1A1A]'/></span>
                                    <div className='justify-center items-center flex flex-col'>
                                        <h5 className='font-bold'>{item.title}</h5>
                                        <p className='font-normal'>{item.desc}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}