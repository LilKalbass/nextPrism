import Image from "next/image";

const Reviews = [
    {
        nickname: 'Damon Salvatore',
        address: '80 Bond',
        text: 'I\'ve been renting with Prism Property Management for over a year now, and I couldn\'t be happier. The apartments are modern and well-maintained, and the staff is always responsive to any concerns. ',
        av: '/assets/Testimonials/TestimAv.png'
    },
    {
        nickname: 'Damon Salvatore',
        address: '80 Bond',
        text: 'I\'ve been renting with Prism Property Management for over a year now, and I couldn\'t be happier. The apartments are modern and well-maintained, and the staff is always responsive to any concerns. ',
        av: '/assets/Testimonials/TestimAv.png'
    },
    {
        nickname: 'Damon Salvatore',
        address: '80 Bond',
        text: 'I\'ve been renting with Prism Property Management for over a year now, and I couldn\'t be happier. The apartments are modern and well-maintained, and the staff is always responsive to any concerns. ',
        av: '/assets/Testimonials/TestimAv.png'
    },
    {
        nickname: 'Damon Salvatore',
        address: '80 Bond',
        text: 'I\'ve been renting with Prism Property Management for over a year now, and I couldn\'t be happier. The apartments are modern and well-maintained, and the staff is always responsive to any concerns. ',
        av: '/assets/Testimonials/TestimAv.png'
    }
];

export const Testimonials = () => {
    return (
        <section className='py-25 bg-[#093D5F]'>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='max-w-[462px] gap-y-6 text-center flex flex-col items-center pb-[50px]'>
                    <h2 className='max-w-[392px] leading-[94%] text-white'>
                        Why Residents Love Living Here
                    </h2>
                    <p className='text-white/80'>
                        Lorem ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    </p>
                </div>
                <div className='flex gap-x-5'>
                    {Reviews.map((item, index) => (
                        <div key={index} className='bg-white rounded-xl p-[26px] space-y-[60px]'>
                            <p className='text-[#2A2A2A]'>{item.text}</p>
                            <div className='flex gap-x-[10px] items-center'>
                                <div className='w-[44px] h-[44px] relative'>
                                    <Image src={item.av} alt='testim_av_img' width={44} height={44} className='object-cover rounded-full'/>
                                </div>
                                <div className='flex flex-col text-[#4C4C4C]'>
                                    <span className='font-medium font-inter text-[18px]'>{item.nickname}</span>
                                    <span className='font-normal text-[16px]'>{item.address}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}