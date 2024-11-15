import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const bars = [
        { id: 1, target: "Robust Solution", title: "Robust Solution", description: "Large format, rugged/ shippable patterns. Low CTE and ultra-low ash." },
        { id: 2, target: "High Precision", title: "High Precision", description: "Advanced manufacturing technology ensures exact dimensions." },
        { id: 3, target: "Cost Effective", title: "Cost Effective", description: "Optimized solutions to reduce material and production costs." },
        { id: 4, target: "Cost Effective", title: "Cost Effective", description: "Optimized solutions to reduce material and production costs." },
        { id: 5, target: "Cost Effective", title: "Cost Effective", description: "Optimized solutions to reduce material and production costs." },
    ];

  

    return (
        <div className="w-full min-h-screen py-[2vw] flex flex-col items-center">
            <h1 className="text-[3vw] font-semibold mb-[2vw]">Foundry Qualified</h1>
            <div className="w-[80%]">
                {bars.map((bar,i) => (
                    <div
                        key={bar.id}
                        className={`w-full border-t ${i === bars.length - 1 && "border-b"} py-[.5vw] flex justify-between border-black/50 pr-[8vw] pl-[3vw]`}
                    >
                        <div className="flex items-center text-[2.5vw]">
                            <h>{bar.title}</h>
                        </div>
                        <div className="gap-[3vw] flex w-[50%] items-center">
                            <img
                                className="w-[6vw]"
                                src="https://res.cloudinary.com/hyac47p8z/image/upload/v1717843297/01_Photopolymer_9d82e8d51a.gif"
                                alt=""
                            />
                            <div>
                                <h4 className="text-[1.1vw] font-semibold">{bar.title}</h4>
                                <p className="text-[#7F7F7F]">{bar.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section3;
