import React, { useContext, useState } from 'react';
import { CartContext } from '@/utils/context/Wrapper';
import Image from 'next/image';

const Section2 = ({ data }) => {
    const { cartItems, setCartItems, setIsCartOpen } = useContext(CartContext);

    const handleAddToBag = (product) => {
        const productExists = cartItems.some(item => item.name === product.name);

        if (!productExists) {
            const updatedCart = [...cartItems, product];
            setCartItems(updatedCart);
        } 
        setIsCartOpen(true);
    };

    return (
        <div className='w-full h-auto p-[2.5vw] sm:px-0 pt-[5vw]'>
            <h1 className='sm:text-[10vw] text-[3vw] font-semibold capitalize sm:mb-[5vw] mb-[2.5vw] text-center leading-tight'>
                {data.title.toLowerCase()}
            </h1>
            <div className='sm:w-[92%] w-[80%] mx-auto rounded-2xl overflow-hidden border border-black/20'>
                {data.product.map((p, i) => (
                    <div key={i} className='product-wraper w-full sm:h-[20vw] h-[6vw] flex justify-end border-b border-black/20'>
                        <div className='w-[15%] sm:h-[20vw] h-[6vw] shrink-0 transition-all duration-150 overflow-hidden'>
                            <Image width={1000} height={1000} className='w-full h-full object-cover' src={p.image} alt={p.name} />
                        </div>
                        <div className='product-txt w-[100%] flex items-center sm:px-[4vw] px-[2vw] justify-between shrink-0 transition-all duration-500'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex flex-col'>
                                    <h2 className='sm:text-[4.5vw] text-[1.5vw] capitalize leading-none mb-[.2vw]'>{p.name}</h2>
                                    <p className='text-[.8vw]'>{p.description}</p>
                                </div>

                                {/* Add to Bag Button */}
                                <div 
                                    id='add-to-bag' 
                                    className='num-c   cursor-pointer rounded-full bg-black text-white sm:text-[3vw] w-[40px] h-[20px] text-[20px] font-semibold transition-all duration-300 relative flex items-center justify-center'
                                    onClick={() => handleAddToBag(p)}
                                >
                                        <p className={`capitalize absolute top-1/2 left-1/2 whitespace-nowrap text-[10px] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-0`}>Enquire Now</p>
                                        <i className={`ri-add-line sm:text-[3vw] text-[.7vw]  text-white transition-all duration-300 `}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section2;
