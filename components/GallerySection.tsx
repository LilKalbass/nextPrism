"use client";

import Image from "next/image";

const largeImages = [
  {
    src: "https://images.unsplash.com/photo-1735394229689-35e980d354a6?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Exterior building",
    width: 686,
    height: 360,
  },
  {
    src: "https://images.unsplash.com/photo-1735394229689-35e980d354a6?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Exterior building",
    width: 686,
    height: 360,
  },
];

const smallImages = [
  {
    src: "https://images.unsplash.com/photo-1750274570282-9c031490f525?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Interior room",
    width: 687,
    height: 240,
  },
  {
    src: "https://images.unsplash.com/photo-1750274570282-9c031490f525?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Interior room",
    width: 687,
    height: 240,
  },
  {
    src: "https://images.unsplash.com/photo-1750274570282-9c031490f525?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Interior room",
    width: 687,
    height: 240,
  },
  {
    src: "https://images.unsplash.com/photo-1750274570282-9c031490f525?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Interior room",
    width: 687,
    height: 240,
  },
];

export const GallerySection = () => {
  return (
    <section className="py-[100px]" id='Gallera'>
      <div className="container mx-auto">
        <h2 className="text-center pb-[70px]">Explore Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
          {largeImages.map((image, index) => (
            <div key={index} className="col-span-1">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-[360px] object-cover rounded-[8px]"
                priority
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mt-4">
          {smallImages.map((image, index) => (
            <div key={index} className="col-span-1">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-[240px] object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
          {largeImages.map((image, index) => (
            <div key={index} className="col-span-1">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-[360px] object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mt-4">
          {smallImages.map((image, index) => (
            <div key={index} className="col-span-1">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-[240px] object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};