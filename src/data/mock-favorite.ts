export type FavoriteProduct = {
    id: number
    name: string
    image: string
    price: number
};

export const mockMyFavorites: FavoriteProduct[] = [
    {
        id: 1,
        name: "Smart Watch",
        image: "/product/watch.webp",
        price: 120,
    }, {
        id: 2,
        name: "Sunscreen",
        image: "/product/sunscreen.webp",
        price: 25,
    }, {
        id: 3,
        name: "T-Shirt",
        image: "/product/tshirt.webp",
        price: 35,
    }
]