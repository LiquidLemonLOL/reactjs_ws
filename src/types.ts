export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    availability: string;
    badge: string;
    rating: number;
}

export type CartItem = {
    id: Product["id"];
    quantity: number;
}

export type Toast = {
    id: string;
    message: string;
}