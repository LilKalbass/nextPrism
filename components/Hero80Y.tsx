"use client";

export default function Hero80Y() {
    return (
        <section className="relative w-full h-[90vh] bg-gray-900 text-white overflow-hidden">
            <img
                src="https://plus.unsplash.com/premium_photo-1750063400799-d3d386a86c36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

                alt="Hero Image"
                className="absolute inset-0 object-cover w-full h-full opacity-60"
            />
            <div className="relative z-10 flex flex-col gap-[60px] items-center justify-center h-full text-center">
                <h1 className="text-5xl font-bold ">Welcome to 80 Bond</h1>
                <button className="cursor-pointer flex items-center gap-x-2 px-6 py-3 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
                    Explore Properties <span className='text-2xl'>↗</span>
                </button>
            </div>
        </section>
    );
}