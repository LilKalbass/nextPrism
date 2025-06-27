import Image from "next/image";
import {Rate} from "./Rate";

const Reviews = [
    {
        nickname: 'Warren and Lorraine',
        address: '80 Bond',
        text: '“ We absolutely love living here! The management and maintenance team are not only friendly and efficient,  but they also go above and beyond by hosting resident events throughout the year. It truly feels like home. ”',
        av: '/assets/Testimonials/TestimAv.png',
        rate: 5
    },
    {
        nickname: 'Warren and Lorraine',
        address: '80 Bond',
        text: '“ I love it, I love the high ceiling. I would really happy with the view overlooking the park. The windows make it for me. ”',
        av: '/assets/Testimonials/TestimAv.png',
        rate: 5
    },
    {
        nickname: 'Warren and Lorraine',
        address: '80 Bond',
        text: '“ If you want to live in a cool, well-designed building with friendly people, then I would say come here. ”',
        av: '/assets/Testimonials/TestimAv.png',
        rate: 5
    },
    {
        nickname: 'Warren and Lorraine',
        address: '80 Bond',
        text: '“ 80 Bond has truly become our forever home. We’ve made so many wonderful friends here and the sense of community is simply outstanding ”',
        av: '/assets/Testimonials/TestimAv.png',
        rate: 5
    }
];

export const Testimonials = () => {
    return (
        <section className='py-25 bg-[#093D5F]'>
            <div className='container mx-auto flex flex-col '>
                <div className=' gap-y-6 text-center flex flex-col items-center pb-[50px]'>
                    <h2 className=' leading-[94%] text-white'>
                        Why Residents Love Living Here
                    </h2>
                    <p className='max-w-[462px] text-white/80'>
                        Lorem ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    </p>
                </div>
                <div className='flex justify-between items-stretch'>
                    {Reviews.map((item, index)=> (
                        <div key={index} className=' flex flex-col w-[366px]  text-left text-white gap-6'>
                            <Image src={item.av} alt='nvm' width={400} height={300} className='rounded-[8px] object-contain'/>
                            <p>{item.text}</p>
                            <div className='gap-2.5 flex flex-col mt-auto'>
                                <h5 className='font-medium'>{item.nickname}</h5>
                                <span className='font-normal text-[16px]'>{item.address}</span>
                            </div>
                            <Rate value={item.rate} starColor={`#FEE547`}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}