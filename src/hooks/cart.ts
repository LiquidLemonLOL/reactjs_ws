import  { useEffect, useState } from 'react';
import type { CartItem } from "../types";


const CART_KEY = "cart_2";


function loadCart(): CartItem[] {
    try {
        // get saved cart
        const savedCart = localStorage.getItem(CART_KEY);
        // if saved cart is found, parse it, else create empty array
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];
        // return parsed, saved cart if found, otherwise return empty array
        return Array.isArray(parsedCart) ? (parsedCart as CartItem[]) : [];
    } catch (e) {
        console.warn("Could not initialize cart: ", e)
        // double fail check, returns empty array if error found
        return [];
    }
}

export function useCart() {
    const [cart, setCart] = useState<CartItem[]>(loadCart);

    useEffect(() => {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
        } catch {
            console.warn("Could not initialize cart: ", cart);
        }
    }, [cart]);

    const addToCart = (id: number) =>
        setCart((prev) =>  {
            const existingCart = prev.find((cart) => cart.id === id);
            return existingCart ?
                prev.map((cart) => (cart.id === id ?
                    { ...cart, quantity: cart.quantity + 1 } :
                    cart)) : [...cart, {id, quantity: 1}];
        });

    const cartCount = cart.reduce((sum, cart) => sum + cart.quantity, 0);

    return { cart, cartCount, addToCart };
}