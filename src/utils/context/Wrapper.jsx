import React, { createContext, useState, useEffect } from 'react';
import Cart from '@/components/cart/Cart';
import dynamic from "next/dynamic";
const PdfViewer = dynamic(() => import("@/components/pdf/PdfViewer"), { ssr: false });

export const CartContext = createContext();

const Wrapper = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isPdf, setIsPdf] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
        // ✅ Load cart from localStorage on first render
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
    });

    useEffect(() => {
        // ✅ Update localStorage whenever cartItems changes
        if (cartItems.length >= 0) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen, cartItems, setCartItems,setIsPdf }}>
            {isPdf ? <PdfViewer fileUrl={"/Allaster_Brochure.pdf"}/> : null}
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            {children}
        </CartContext.Provider>
    );
};

export default Wrapper;
