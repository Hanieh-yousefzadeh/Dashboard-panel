export type MyOrders = {
    id: number
    name: string
    image: string
    date: string
    price: number
    status: "pendding" | "delivered" | "cancelled" | "returned"
}

export const mockMyOrders: MyOrders[] = [
    {
        id: 1002,
        name: "Sunscreen",
        image: "/product/sunscreen.webp",
        date: "2026-10-18",
        price: 450000,
        status: "delivered",
    },{
        id: 1003,
        name: "T-Shirt",
        image: "/product/tshirt.webp",
        date: "2026-10-15",
        price: 650000,
        status: "cancelled",
    },{
        id: 1004,
        name: "English Tutorials",
        image: "/product/book.webp",
        date: "2026-10-12",
        price: 800000,
        status: "returned",
    },{
        id: 1005,
        name: "Smart Watch",
        image: "/product/watch.webp",
        date: "2026-10-22",
        price: 2500000,
        status: "pendding",
    },
]