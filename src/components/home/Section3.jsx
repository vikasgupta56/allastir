import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const bars = [
        { id: 1, target: 65, title: "Robust Solution", description: "Large format, rugged/ shippable patterns. Low CTE and ultra-low ash." },
        { id: 2, target: 85, title: "High Precision", description: "Advanced manufacturing technology ensures exact dimensions." },
        { id: 3, target: 45, title: "Cost Effective", description: "Optimized solutions to reduce material and production costs." },
        { id: 4, target: 25, title: "Cost Effective", description: "Optimized solutions to reduce material and production costs." },
        { id: 5, target: 45, title: "Cost Effective", description: "Optimized solutions to reduce material and production costs." },
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
        <div className="w-full min-h-screen py-[2vw] flex flex-col items-center">
            <h1 className="sm:text-[6.5vw] text-[3vw] font-semibold sm:mb-[6vw] mb-[3vw]">Foundry Qualified</h1>
            <div className="sm:w-[92%] w-[75%]">
                {bars.map((bar, i) => (
                    <div
                        key={bar.id}
                        className={`bar-${bar.id} w-full border-t ${i === bars.length - 1 && "border-b"} sm:py-[4vw] py-[.5vw] flex sm:flex-col justify-between border-black/20 px-[1.7vw]`}
                    >
                        <div className="flex items-center sm:text-[6vw] text-[4vw] opacity-[.8]">
                            <h2 className={`count-${bar.id}`}>0</h2>
                            <span>+</span>
                        </div>
                        <div className="gap-[3vw] flex sm:w-full sm:mt-[5vw] w-[49%] sm:items-start items-center">
                            <img
                                className="sm:w-[15vw] w-[6vw]"
                                src="https://res.cloudinary.com/hyac47p8z/image/upload/v1717843297/01_Photopolymer_9d82e8d51a.gif"
                                alt=""
                            />
                            <div>
                                <h4 className="sm:text-[3.5vw] text-[1.1vw] font-semibold">{bar.title}</h4>
                                <p className="sm:text-[3.2vw] text-[#7F7F7F]">{bar.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section3;
