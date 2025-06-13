import type { Product } from "@/components/ProductsList";
import hatImg from "../assets/product-image-hat.jpg";

export const defaultProducts: Product[] = [
    {
        image: hatImg,
        title: "Red Hat",
        description: "Clothing",
        price: 28000,
        onAddToCart: () => console.log("Added Red Hat"),
      },
      {
        image: hatImg,
        title: "Beanie",
        description: "Winter Wear",
        price: 22000,
        onAddToCart: () => console.log("Added Beanie"),
      },
      {
        image: hatImg,
        title: "Beanie",
        description: "Winter Wear",
        price: 22000,
        onAddToCart: () => console.log("Added Beanie"),
      },
      {
        image: hatImg,
        title: "Beanie",
        description: "Winter Wear",
        price: 22000,
        onAddToCart: () => console.log("Added Beanie"),
      },
]
