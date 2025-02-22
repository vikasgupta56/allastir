import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/utils/context/Wrapper';
import gsap from 'gsap';

const Cart = ({ isOpen, onClose }) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // ✅ Ensure this runs only on the client
    }, []);

    useEffect(()=>{
        if(isOpen){
            gsap.to("#cartContainer",{
                right:0,
                duration:.8
            })
        }
        else{
            gsap.to("#cartContainer",{
                right:"-50%",
                duration:.8,
                onComplete:()=>{
                    gsap.to("#cart-wrapper",{
                        marginTop:"0",
                        opacity:1,
                    })
                }
            })
           
        }
    },[isOpen])

    const handleEnquire = ()=>{
        gsap.to("#cart-wrapper",{
            marginTop:"-100vh",
            opacity:0,
            duration:1
        })
    }
    
    return (
        <div id='cartContainer' className="fixed overflow-hidden top-0 right-[-50%] h-screen z-[99] w-[35vw] p-4 bg-white shadow-lg">
           <div id='cart-wrapper' className='relative flex flex-col h-full'>
           <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Products</h2>
            </div>

            <div className="flex-grow overflow-y-auto max-h-[70vh]">
                {isMounted && cartItems.length > 0 ? ( // ✅ Only render cart when mounted
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between items-center p-2 border-b">
                                <span>{item.name} - {item.description}</span>
                                <button
                                    onClick={() => {
                                        const updatedCart = cartItems.filter((_, i) => i !== index);
                                        setCartItems(updatedCart);
                                    }}
                                    className="text-gray-600 font-normal text-sm hover:text-black px-3 py-1 rounded"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    isMounted ? <p className="text-gray-500">Your cart is empty.</p> : null
                )}
            </div>

            {isMounted && cartItems.length > 0 && (
                <div className="mt-4 p-4 border-t w-full absolute bottom-0 left-0 flex items-center justify-between bg-white">
                    <h3 className="text-lg font-semibold">Total: {cartItems.length}</h3>
                    <button onClick={handleEnquire} className="px-6 bg-black text-white py-2 rounded-full">Enquire Now</button>
                </div>
            )}
           </div>
           <div className='w-full  h-[100vh] sm:bg-transparent   rounded-2xl p-[2.5vw] flex flex-col justify-between'>
                <div className='w-full'>
                    <h1 className='sm:text-[10vw] text-[3vw] capitalize leading-none'>Contact us</h1>
                    <p className='sm:text-[4.5vw] sm:w-full text-[1vw] w-[80%] sm:my-[4.5vw] my-[1vw] leading-1'>Our secure system ensures a smooth and hassle-free booking experience. Don’t wait for your dental needs—book your appointment online today.</p>
                </div>
                <form className='w-full mt-[1.5vw] sm:mt-[0] flex flex-col sm:gap-[3vw] gap-[1vw] sm:text-[3.5vw]'>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[2.5vw] sm:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Name' />
                    </div>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[2.5vw] sm:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Phone Number' />
                    </div>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[2.5vw] sm:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='E-Mail Address' />
                    </div>
                    <div className='w-full flex'>
                        <textarea className='w-full resize-none sm:h-[18vw] h-[7vw] p-[1.5vw] sm:py-[2.5vw] sm:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' placeholder='Write additional information'></textarea>
                    </div>
                    <div className='w-full flex items-center justify-center sm:h-[7vw] h-[4vw] sm:mt-[2vw]'>
                        <div className='text-white bg-black w-full text-center capitalize px-[1.5vw] transition-all duration-500 cursor-pointer sm:py-[4vw] py-[.6vw] rounded-full font-semibold'>
                            <h4 className='sm:text-[3.5vw] text-[1.1vw] font-normal'>Submit</h4>
                        </div>
                    </div>
                </form>
            </div>
            <button className="absolute top-[2vw] right-[2.5vw] text-[1.3vw] text-black hover:text-gray-800" onClick={onClose}><i class="ri-close-line"></i></button>

        </div>
    );
};

export default Cart;
