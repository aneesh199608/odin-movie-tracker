import type { Movies } from "@/components/MoviesList";
import hatImg from "../assets/product-image-hat.jpg";

export const defaultMovies: Movies[] = [
    {
        image: hatImg,
        title: "Red Hat",
        description: "Clothing",
        rating: 28000,
        category: "clothes",
        onAddToWatch: () => console.log("Added Red Hat"),
      },
      {
        image: hatImg,
        title: "Sneakers",
        description: "Footwear",
        rating: 18000,
        category: "footwear",
        onAddToWatch: () => console.log("Added Sneakers"),
      },
      {
        image: hatImg,
        title: "Poster 1",
        description: "Posters",
        rating: 500,
        category: "posters",
        onAddToWatch: () => console.log("Added Poster"),
      },
      {
        image: hatImg,
        title: "Laptop",
        description: "Electronics",
        rating: 58000,
        category: "electronics",
        onAddToWatch: () => console.log("Added Laptop"),
      },
]
