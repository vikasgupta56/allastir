import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/utils/context/Wrapper';
import gsap from 'gsap';

const Cart = ({ isOpen, onClose }) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.set("#cartContainer", { right: "-50%" }); // Ensure the initial position before animating
            gsap.set("#cart-wrapper", {
                marginTop: "0",
                opacity: 1,
            });
            var tl = gsap.timeline();
            tl.to("#cartOverlay", { opacity: 1, backgroundColor: "#00000070", visibility: "visible", duration: 0.5 })
                .to("#cartContainer", { right: "0%", duration: 0.8, ease: "power3.out" }, "-=0.4");
        } else {
            var tl = gsap.timeline();
            tl
                .to("#cartOverlay", { backgroundColor: "transparent", duration: 0.3 }) // Fade out overlay first
                .to("#cartContainer", { right: "-50%", duration: 0.6, ease: "power3.in" }, "-=0.3") // Then move cart
                .set("#cartOverlay", { visibility: "hidden" }); // Hide overlay after animation
        }
    }, [isOpen]);

    const handleEnquire = () => {
        gsap.to("#cart-wrapper", {
            marginTop: "-100vh",
            opacity: 0,
            duration: 1
        });
    };

    return (
        <div id="cartOverlay" className="fixed top-0 left-0 w-full h-screen bg-[#00000070] opacity-0 invisible z-[98] flex justify-end" onClick={onClose}>
            {/* Cart Sidebar */}
            <div id='cartContainer' className="absolute right-[-50%] top-0 w-[35vw] h-full bg-white shadow-lg p-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div id='cart-wrapper' className='relative flex flex-col h-full'>

                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Products</h2>

                    </div>

                    {/* Cart Items */}
                    <div className="flex-grow overflow-y-auto max-h-[70vh]">
                        {isMounted && cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center p-2 border-b">
                                        <span>{item.name} - {item.description}</span>
                                        <button
                                            onClick={() => {
                                                const updatedCart = cartItems.filter((_, i) => i !== index);
                                                setCartItems(updatedCart);
                                            }}
                                            className="text-gray-600 text-sm hover:text-black px-3 py-1 rounded"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            isMounted ? <div className="h-[90vh] w-full flex flex-col items-center justify-center">
                                <p className="text-lg font-medium text-center">Cart is empty... <br /> Add products to enquire!</p>
                            </div> : null
                        )}
                    </div>

                    {/* Cart Footer */}
                    {isMounted && cartItems.length > 0 && (
                        <div className="mt-4 p-4 border-t w-full absolute bottom-0 left-0 flex items-center justify-between bg-white">
                            <h3 className="text-lg font-semibold">Total: {cartItems.length}</h3>
                            <button onClick={handleEnquire} className="px-6 bg-black text-white py-2 rounded-full">Enquire Now</button>
                        </div>
                    )}
                </div>
                <div className='w-full h-[100vh] sm:bg-transparent  sm:p-0 p-[2.5vw] flex flex-col justify-between'>
                    <div className='w-full'>
                        <h1 className='sm:text-[10vw] text-[3.5vw] capitalize leading-none'>Contact us</h1>
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
                <button className="absolute top-[20px] right-[40px] text-xl text-black hover:text-gray-800" onClick={onClose}>
                            <i className="ri-close-line"></i>
                        </button>
            </div>

        </div>
    );
};

export default Cart;
