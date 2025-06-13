import type { Product } from "@/components/ProductsList";
import hatImg from "../assets/product-image-hat.jpg";

export const defaultProducts: Product[] = [
    {
        image: hatImg,
        title: "Red Hat",
        description: "Clothing",
        price: 28000,
        category: "clothes",
        onAddToCart: () => console.log("Added Red Hat"),
      },
      {
        image: hatImg,
        title: "Sneakers",
        description: "Footwear",
        price: 18000,
        category: "footwear",
        onAddToCart: () => console.log("Added Sneakers"),
      },
      {
        image: hatImg,
        title: "Poster 1",
        description: "Posters",
        price: 500,
        category: "posters",
        onAddToCart: () => console.log("Added Poster"),
      },
      {
        image: hatImg,
        title: "Laptop",
        description: "Electronics",
        price: 58000,
        category: "electronics",
        onAddToCart: () => console.log("Added Laptop"),
      },
]
