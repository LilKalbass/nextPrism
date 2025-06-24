'use client';

import { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import type { Map as LeafletMap } from 'leaflet';

export const PropertyMap = () => {
    const mapRef = useRef(null);
    const [activeProperty, setActiveProperty] = useState(0);
    const [map, setMap] = useState<LeafletMap | null>(null);


    const properties = [
        {
            name: 'Property 1',
            description: 'Beautiful beachfront villa.',
            address: '123 Ocean Dr, Miami, FL',
            lat: 25.7617,
            lng: -80.1918,
            images: [
                { url: 'https://via.placeholder.com/150' },
                { url: 'https://via.placeholder.com/150' },
            ],
            url: 'https://example.com/property1',
        },
        {
            name: 'Property 2',
            description: 'Cozy downtown apartment.',
            address: '456 City Rd, Miami, FL',
            lat: 25.7753,
            lng: -80.2091,
            images: [{ url: 'https://via.placeholder.com/150' }],
            url: 'https://example.com/property2',
        },
    ];

    useEffect(() => {
        let leafletMap: LeafletMap;

        const loadMap = async () => {
            const L = await import('leaflet');
            if (!mapRef.current) return;

            leafletMap = L.map(mapRef.current, {
                zoom: 13,
                center: [properties[0].lat, properties[0].lng],
                scrollWheelZoom: false,
                fadeAnimation: true,
            });

            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '© OpenStreetMap contributors © CARTO',
                subdomains: 'abcd',
                maxZoom: 19,
            }).addTo(leafletMap);

            const activeIcon = L.divIcon({
                html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40" fill="none">
                  <g clip-path="url(#clip0_57_2)">
                    <path d="M30 0H0V30.1838H30V0Z" fill="#083E5F"/>
                    <path d="M15 40L10.4079 31.9974L5.81516 23.9948H15H24.1848L19.5921 31.9974L15 40Z" fill="#083E5F"/>
                    <path d="..." fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_57_2">
                      <rect width="30" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>`,
                className: '',
                iconSize: [30, 40],
                iconAnchor: [15, 40],
            });

            const inactiveIcon = L.divIcon({
                html: ` <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40" fill="none">
                  <g clip-path="url(#clip0_57_2)">
                    <path d="M30 0H0V30.1838H30V0Z" fill="#CCCCCC"/>
                    <path d="M15 40L10.4079 31.9974L5.81516 23.9948H15H24.1848L19.5921 31.9974L15 40Z" fill="#CCCCCC"/>
                    <path d="..." fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_57_2">
                      <rect width="30" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>`,
                className: '',
                iconSize: [30, 40],
                iconAnchor: [15, 40],
            });

            const markers = properties.map((property, index) => {
                const marker = L.marker([property.lat, property.lng], {
                    icon: index === 0 ? activeIcon : inactiveIcon,
                }).addTo(leafletMap);

                marker.on('click', () => {
                    leafletMap.flyTo([property.lat, property.lng], 15, { animate: true, duration: 1.5 });
                    setActiveProperty(index);
                    markers.forEach((m, i) => m.setIcon(i === index ? activeIcon : inactiveIcon));
                });

                return marker;
            });

            setMap(leafletMap);
        };

        loadMap();

        return () => {
            if (leafletMap) {
                leafletMap.remove();
            }
        };
    }, []);


    const handlePropertyClick = (index:number) => {
        const property = properties[index];
        setActiveProperty(index);
        if (map) {
            map.flyTo([property.lat, property.lng], 15, { animate: true, duration: 1.5 });
        }
    };

    const activeProp = properties[activeProperty];

    return (
        <section className="flex flex-col items-center justify-center gap-6 w-full py-[120px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center gap-y-6 pb-[50px]">
                    <h2 className="text-[#2A2A2A] leading-[92%]">Discover Our Rental Properties</h2>
                    <p className="text-[#52525B] max-w-[436px]">
                        Lorem ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    </p>
                </div>
                <div className="flex flex-wrap gap-5 w-full">
                    <div className="w-full md:w-[39%] flex flex-col gap-2.5">
                        {properties.map((property, index) => (
                            <div
                                key={index}
                                className={`p-2.5 cursor-pointer rounded-lg border border-transparent transition-all hover:bg-blue-50 ${
                                    activeProperty === index ? 'bg-blue-50' : ''
                                }`}
                                onClick={() => handlePropertyClick(index)}
                            >
                                <div className="flex flex-row items-center gap-5">
                                    <div className="flex-shrink-0 flex items-center justify-center">
                                        <svg width="30" height="30" viewBox="0 0 30 30">
                                            <text
                                                x="50%"
                                                y="50%"
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                fontSize="22"
                                            >
                                                0{index + 1}
                                            </text>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h6 className="text-4xl font-normal text-gray-800 m-0">{property.name}</h6>
                                        <div className="mt-2.5 text-lg text-gray-800">{property.description}</div>
                                    </div>
                                    <div    className="text-4xl text-gray-800 cursor-pointer">+</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-[59%] relative">
                        <div ref={mapRef} className="w-full h-96 border border-gray-300 mb-3.5"></div>
                        <div className="absolute top-5 right-5 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-2.5 z-[1000]">
                            <div className="text-base font-bold mb-2">{activeProp.name}</div>
                            <div className="text-sm text-gray-600 mb-2.5">{activeProp.address}</div>
                            <div className="mb-2.5">
                                {activeProp.images[0] ? (
                                    <img
                                        src={activeProp.images[0].url}
                                        alt="Property Image"
                                        className="w-full rounded-lg"
                                        loading="lazy"
                                    />
                                ) : (
                                    <p>No Image Available</p>
                                )}
                            </div>
                            <a
                                href={activeProp.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full bg-[#093D5F] text-white flex items-center justify-between p-2.5 rounded-lg ${
                                    activeProp.url ? '' : 'pointer-events-none'
                                }`}
                            >
                                View Property
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className="grid grid-cols-3 gap-2.5">
                            {activeProp.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.url}
                                    alt="Property Image"
                                    className="w-full border border-gray-300 rounded-lg hidden md:block"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
