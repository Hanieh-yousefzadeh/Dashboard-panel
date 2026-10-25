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
    image: "/images/watch.png",
    price: 120,
  },{
    id: 2,
    name: "Sunscreen",
    image: "/images/sunscreen.png",
    price: 25,
  },{
    id: 3,
    name: "T-Shirt",
    image: "/images/tshirt.png",
    price: 35,
  }
]