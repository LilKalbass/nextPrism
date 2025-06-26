"use client";

import Image from "next/image";

export const Hero80Y = () => {
    return (
        <section className="relative w-full h-[90vh] bg-gray-900 text-white overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1750810977313-f009e3b0c4bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                fill
                alt="Hero Image"
                className="absolute inset-0 object-cover w-full h-full opacity-60"
            />
            <div className="relative z-10 flex flex-col gap-[60px] items-center justify-center h-full text-center">
                <h1 className="text-5xl font-bold ">Welcome to 80 Bond</h1>
                <button className="cursor-pointer flex items-center gap-x-2 px-6 py-3 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
                    Explore Properties <span className='text-xl'>↗</span>
                </button>
            </div>
        </section>
    );
}