import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const bars = [
        { id: 1, target: 2, title: "2 State-of-the-Art Manufacturing Facilities", description: "Our state-of-the-art manufacturing facilities span over 225,000 SQFT, ensuring world-class production capabilities." },
        { id: 2, target: 40, title: "40+ Products in Our Portfolio", description: "Our diverse range of APIs and formulations meets global pharmaceutical demands and therapeutic needs." },
        { id: 3, target: 100, title: "100+ Global Clients", description: "We are a trusted partner to leading pharmaceutical companies, delivering consistent quality and innovation." },
    ];

    const countsRef = useRef([]);

    useEffect(() => {
        bars.forEach((bar, index) => {
            const countObj = { count: 0 };
            countsRef.current[index] = countObj;

            gsap.to(countObj, {
                count: bar.target,
                duration: 1,
                ease: "power1.out",
                onUpdate: () => {
                    const countElement = document.querySelector(`.count-${bar.id}`);
                    if (countElement) {
                        countElement.textContent = Math.round(countObj.count);
                    }
                },
                scrollTrigger: {
                    trigger: `.bar-${bar.id}`,
                    start: "top 90%",
                    end: "top 75%",
                    scrub: 1,
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [bars]);

    return (
        <div className="w-full h-fit py-[2vw] flex flex-col items-center">
            <h1 className="sm:text-[10vw] text-center leading-tight whitespace-wrap text-[3vw] font-semibold sm:mb-[6vw] mb-[3vw]">Our Strengths</h1>
            <div className="sm:w-[92%] w-[75%]">
                {bars.map((bar, i) => (
                    <div
                        key={bar.id}
                        className={`bar-${bar.id} relative w-full border-t ${i === bars.length - 1 && "border-b"} sm:py-[4vw] py-[.1vw] flex sm:flex-col justify-between border-black/20 px-[1.7vw]`}
                    >
                        <div className="flex items-center sm:text-[12vw] text-[4vw] opacity-[.8]">
                            <h2 className={`count-${bar.id}`}>0</h2>
                            <span>+</span>
                        </div>
                        <div className="flex  sm:w-full sm:mt-[2vw] w-[49%] sm:items-start items-center">
                            <img
                                className="sm:w-[20vw] w-[10vw] sm:absolute sm:top-[10%] sm:right-0"
                                src="https://res.cloudinary.com/hyac47p8z/image/upload/v1717843297/01_Photopolymer_9d82e8d51a.gif"
                                alt=""
                            />
                            <div>
                                <h4 className="sm:text-[5vw] text-[1.1vw] font-semibold">{bar.title}</h4>
                                <p className="sm:text-[4.5vw] text-[#7F7F7F]">{bar.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section3;
