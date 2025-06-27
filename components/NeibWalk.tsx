import Image from "next/image";

export const NeibWalk = () => {
    const neibDistanceList = [
        {
            svg: '/assets/80bond/neibWalk/Stores.svg',
            title: 'Grocery Stores',
            locsnTime: [
                {
                    Dest: 'FreshCo',
                    timeWalkin: 2
                },
                {
                    Dest: 'CostCo',
                    timeWalkin: 3
                },
                {
                    Dest: 'No Frills',
                    timeWalkin: 10
                },
            ]
        },
        {
            svg: '/assets/80bond/neibWalk/Parks.svg',
            title: 'Parks',
            locsnTime: [
                {
                    Dest: 'FreshCo',
                    timeWalkin: 2
                },
                {
                    Dest: 'CostCo',
                    timeWalkin: 3
                },
                {
                    Dest: 'No Frills',
                    timeWalkin: 10
                },
            ]
        },
        {
            svg: '/assets/80bond/neibWalk/Stops.svg',
            title: 'Transit Stops',
            locsnTime: [
                {
                    Dest: 'FreshCo',
                    timeWalkin: 2
                },
                {
                    Dest: 'CostCo',
                    timeWalkin: 3
                },
                {
                    Dest: 'No Frills',
                    timeWalkin: 10
                },
            ]
        },
        {
            svg: '/assets/80bond/neibWalk/Commute.svg',
            title: 'Commute',
            locsnTime: [
                {
                    Dest: 'FreshCo',
                    timeWalkin: 2
                },
                {
                    Dest: 'CostCo',
                    timeWalkin: 3
                },
                {
                    Dest: 'No Frills',
                    timeWalkin: 10
                },
            ]
        },
    ]

    return (
        <section className='py-[100px]' id='neibWalkSec'>
            <div className='container mx-auto'>
                <h2 className='text-[#1A1A1A] pb-[70px] text-center'>Neighbourhood</h2>
                <div className='flex items-baseline justify-between'>
                    {neibDistanceList.map((item, index) => (
                        <div key={index} className='w-[320px] flex flex-col relative gap-10'>
                            <div className='gap-3 flex flex-col items-center'>
                                <Image src={item.svg} alt='nvm' width={200} height={120} className='object-fit w-full h-[120px]'/>
                                <h4 className='text-[#1A1A1A] text-center leading-none'>{item.title}</h4>
                            </div>
                            <div className='flex flex-col items-center'>
                                {item.locsnTime.map((item, locIndex) => (
                                    <div key={locIndex} className='w-full flex flex-col font-playf'>
                                        <span className='text-[18px] leading-none font-bold text-[#1A1A1A] justify-center bg-yellow-200 flex py-3'>{item.Dest}</span>
                                        <div className='flex justify-center items-center leading-none text-center gap-2.5 py-6'>
                                            <span className='text-[72px] font-bold'>{item.timeWalkin}</span>
                                            <span className='text-[16px] self-end leading-[180%] font-medium'>Minute<br/>Walk</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}