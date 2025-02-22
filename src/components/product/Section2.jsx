import React, { useContext } from 'react';
import { CartContext } from '@/utils/context/Wrapper';

const Section2 = ({ data }) => {
    const { cartItems, setCartItems } = useContext(CartContext);

    const handleAddToBag = (product) => {
        const productExists = cartItems.some(item => item.name === product.name); // Check if product exists

        if (!productExists) {
            const updatedCart = [...cartItems, product];
            setCartItems(updatedCart); // Update global context
            // alert(`${product.name} added to bag!`);
        } 
        // else {
        //     alert(`${product.name} is already in the bag!`);
        // }
    };

    return (
        <div className='w-full h-auto p-[2.5vw] sm:px-0 pt-[5vw]'>
            <h1 className='sm:text-[10vw] text-[3vw] font-semibold capitalize sm:mb-[5vw] mb-[2.5vw] text-center leading-tight'>{data.title.toLowerCase()}</h1>
            <div className='sm:w-[92%] w-[80%] mx-auto rounded-2xl overflow-hidden border border-black/20'>
                {data.product.map((p, i) => (
                    <div key={i} className='product-wraper w-full sm:h-[20vw] h-[6vw] flex justify-end border-b border-black/20'>
                        <div className='w-[20%] sm:h-[20vw] h-[6vw] shrink-0 transition-all duration-150 overflow-hidden'>
                            <img className='w-full h-full object-cover object-bottom' src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={p.name} />
                        </div>
                        <div className='product-txt w-[100%] flex items-center sm:px-[4vw] px-[2vw] justify-between shrink-0 transition-all duration-500'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex flex-col'>
                                    <h2 className='sm:text-[4.5vw] text-[1.5vw] capitalize leading-none mb-[.2vw]'>{p.name}</h2>
                                    <p className='text-[.8vw]'>{p.description}</p>
                                </div>
                                <div 
                                    id='add-to-bag' 
                                    className='num-c sm:px-[4vw] cursor-pointer px-[1.1vw] sm:py-[.5vw] py-[.1vw] rounded-full bg-black text-white sm:text-[3vw] text-[.7vw] font-semibold transition-all duration-300 relative'
                                    onClick={() => handleAddToBag(p)} // Add click event
                                >
                                    <i className="ri-add-line sm:text-[3vw] text-[.7vw] text-white transition-all duration-300"></i>
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
