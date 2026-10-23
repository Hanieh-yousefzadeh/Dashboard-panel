
export type Product = {
    id: number
    image: string
    name: string
    categoryId: number
    price: number
    stock: number
}
export const mockProducts: Product[] = [
    {
        id: 1592701450180,
        image: "/product/sunscreen.webp",
        name: "Sunscreen",
        categoryId: 1792701450180,
        price: 120,
        stock: 15,
    },
    {
        id: 1692701450180,
        image: "/product/watch.webp",
        name: "Smart Watch",
        categoryId: 1792701450181,
        price: 200,
        stock: 8,
    },
    {
        id: 1792701450180,
        image: "/product/tshirt.webp",
        name: "T-Shirt",
        categoryId: 1792701450184,
        price: 25,
        stock: 30,
    },
    {
        id: 1892701450180,
        image: "/product/book.webp",
        name: "English Language Tutorial",
        categoryId: 1792701450182,
        price: 40,
        stock: 12,
    }, {
        id: 1992701450180,
        image: "/product/pot.webp",
        name: "Stainless steel pot",
        categoryId: 1792701450183,
        price: 150,
        stock: 5,
    }
]