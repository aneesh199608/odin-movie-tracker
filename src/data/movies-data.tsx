import type { Movies } from "@/types/movies"
import aHero from "../assets/a-hero.jpg"
import stolen from "../assets/stolen-movie-poster.jpg"
import spiritedAway from "../assets/spirited-away.jpg"
import gameNight from "../assets/game-night.jpg"
import httyd from "../assets/how-to-train-your-dragon.jpg"

export const defaultMovies: Movies[] = [
    {
        image: aHero,
        title: "A Hero",
        description: "Drama",
        rating: 3,
        category: "recommendations",
        onAddToWatch: () => console.log(`Added A Hero`),
        director: "Asghar Farhadi",
        runtime: "2 hrs 20 mins",
        cast: ["Amir Jadidi"],
      },
      {
        image: spiritedAway,
        title: "Spirited Away",
        description: "Animated, Fantasy",
        rating: 5,
        category: "ghibli",
        onAddToWatch: () => console.log("Added Spirited Away"),
      },
      {
        image: stolen,
        title: "Stolen (2023)",
        description: "Drama, True Story",
        rating: 4,
        category: "indian",
        onAddToWatch: () => console.log("Added Poster"),
      },
      {
        image: gameNight,
        title: "Game Night",
        description: "Comedy",
        rating: 3,
        category: "guiltypleasure",
        onAddToWatch: () => console.log("Added Laptop"),
      },
      {
        image: httyd,
        title: "How To Train Your Dragon (Animated)",
        description: "Animated",
        rating: 4,
        category: "guiltypleasure",
        onAddToWatch: () => console.log("Added HTTYD"),
      },
]
