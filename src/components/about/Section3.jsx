import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const bars = [
        { id: 1, target: "State-of-the-Art Facilities", title: "State-of-the-Art Facilities", description: "Our advanced manufacturing units, covering 225,000+ SQFT, ensure precision, efficiency, and scalability.", image:"/company-our-strengths.png" },
        { id: 2, target: "Trusted Industry Partnerships", title: "Trusted Industry Partnerships", description: "We collaborate with top Indian pharmaceutical MNCs, delivering high-quality API and formulations.", image:"/global-reach-our-strength.png" },
        { id: 3, target: "Comprehensive Product Portfolio", title: "Comprehensive Product Portfolio", description: "With 40+ finished formulation dossiers and 25 niche API products, we cater to diverse therapeutic needs.", image:"/product-our-strengths.png" },
        { id: 4, target: "Regulatory Excellence", title: "Regulatory Excellence", description: "We have 14 APIs with DMF, 5 CDSCO-approved APIs, and 6 APIs with completed toxicology studies.", image:"/Regulatory Excellence.png" },
        { id: 5, target: "Pioneering Innovation", title: "Pioneering Innovation", description: "We have introduced 2 first-time-in-India APIs and have 6 niche API products currently under development.", image:"/Pioneering Innovation.png" },
    ];

  

    return (
        <div className="w-full sm:min-h-fit min-h-screen py-[2vw] flex flex-col items-center">
            <h1 className="sm:text-[10vw] text-[3vw] font-semibold sm:mb-[6vw] mb-[3vw]">Our Strengths</h1>
            <div className="sm:w-[92%] w-[75%]">
                {bars.map((bar,i) => (
                    <div
                        key={bar.id}
                        className={`w-full relative border-t ${i === bars.length - 1 && "border-b"} sm:py-[4vw] py-[.5vw] h-[12vw] flex sm:flex-col justify-between border-black/20 px-[1.7vw]`}
                    >
                        <div className="flex items-center sm:hidden text-[2.5vw]">
                            <h2>{bar.title}</h2>
                        </div>
                        <div className="flex  sm:w-full sm:mt-[2vw] gap-[2vw] w-[49%] sm:items-start items-center">
                            <Image
                            width={1000}
                            height={1000}
                                className="sm:w-[20vw] w-[5vw] sm:absolute sm:top-[10%] sm:right-0"
                                src={bar.image}
                                alt={bar.title}
                            />
                            <div>
                                <h4 className="sm:text-[5vw] text-[1.1vw] font-semibold">{bar.title}</h4>
                                <p className="sm:text-[4.5vw] text-[#7F7F7F] sm:w-[80%]">{bar.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section3;
