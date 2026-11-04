import  { useEffect, useState } from 'react';
import type { CartItem } from "../types";

// only changed to not match same as last workshop
const CART_KEY = "cart_2";


function loadCart(): CartItem[] {
    try {
        // get saved cart
        const savedCart = localStorage.getItem(CART_KEY);
        // if saved cart is found, parse it, else create empty array
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];
        // return parsed adhering to CartItem type, saved cart if found, otherwise return empty array
        return Array.isArray(parsedCart) ? (parsedCart as CartItem[]) : [];
    } catch (e) {
        console.warn("Could not initialize cart: ", e)
        // double fail check, returns empty array if error found
        return [];
    }
}


export function useCart() {
    // tracks state of cart by loading the possibly locally stored cart,
    const [cart, setCart] = useState<CartItem[]>(loadCart);

    // used to save cart, setting cart_2 whenever [cart] array is changed
    useEffect(() => {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
        } catch {
            console.warn("Could not save cart: ", cart);
        }
    }, [cart]);

    // add to cart through id of product
    const addToCart = (id: number) =>
        //sends previous state value to decide how to update
        setCart((prev) =>  {
            // search for existing item in cart, returns undefined if none found
            const existingItem = prev.find((cart) => cart.id === id);
            // if item exists, update quantity, if not add new item with quantity set to 1
            return existingItem ?
                // loops through items, copies the properties of selected item and updates quantity, if not
                // creates new array from prev to add to cart with quantity set to 1
                prev.map((item) => (item.id === id ?
                    { ...item, quantity: item.quantity + 1 } : item)) : [...prev, {id, quantity: 1}];
        });

    // combines all elements to single final value which shows total cart count
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return { cart, cartCount, addToCart };
}