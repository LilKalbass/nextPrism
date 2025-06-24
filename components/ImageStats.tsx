import Image from "next/image";

type ImageStatsProps = {
    src?: string;
};

export const ImageStats = ({ src }: ImageStatsProps) => {
    return (
        <section className="w-full">
            <div className="mx-auto w-full">
                {src ? (
                    <div className="flex flex-col md:flex-row">
                        <div className="relative w-[864px] h-[824px]">
                            <Image src={src} alt="Stat" fill className='object-cover'/>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-center relative p-8">
                            <p className="p-big text-[#E1E8ED] leading-none z-0">
                                40
                            </p>
                            <h2 className="absolute text-center font-medium z-10 max-w-[80%] mb-8 text-[#2A2A2A]">
                                Years Of Excellence,<br />
                                Managing Properties<br />
                                One Building At A Time
                            </h2>
                        </div>
                    </div>
                ) : (
                    <p className="text-center py-12">No image available</p>
                )}
            </div>
        </section>
    );
};
