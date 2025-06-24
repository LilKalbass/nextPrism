import Image from "next/image";

const Buildings = [
    {
        h: 'Oshawa',
        text: 'Oshawa, one of Canada’s fastest-growing cities, lies within the lands covered by the Williams Treaties and continues to be home to diverse Indigenous communities.',
        img: '/assets/LandAcknowl/Oshawa.png'
    },
    {
        h: 'Oshawa',
        text: 'Oshawa, one of Canada’s fastest-growing cities, lies within the lands covered by the Williams Treaties and continues to be home to diverse Indigenous communities.',
        img: '/assets/LandAcknowl/Oshawa.png'
    }
];

export const LandAcknowl = () => {
    return (
        <section className='pb-[140px]'>
            <div className='container mx-auto'>
                <div className='mx-auto max-w-[488px] text-[#2A2A2A] text-center space-y-6 pb-[50px]'>
                    <h2 className='leading-[94%]'>Land Acknowledgement</h2>
                    <p className='text-[#52525B]'>
                        We respectfully acknowledge that we are gathered on the traditional territories of the Mississauga Anishinaabeg.
                    </p>
                </div>
                <div className='flex justify-between items-baseline gap-x-[18px]'>
                    {Buildings.map((item, index) => (
                        <div key={index} className='flex gap-x-4'>
                            <div className='relative flex w-[378px] h-[426px]'>
                                <Image src={item.img} alt={item.img} fill className='object-cover'/>
                            </div>
                            <div className='flex flex-col items-baseline max-w-[340px] justify-between'>
                                <h4 className='mt-5 leading-[100%]'>{item.h}</h4>
                                <p className='text-[#52525B] leading-[108%]'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}