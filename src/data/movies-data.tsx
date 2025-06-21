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
        runtime: "140",
        cast: ["Amir Jadidi"],
        moreDescription: "Rahim is in prison because of a debt he was unable to repay. During a two-day leave, he tries to convince his creditor to withdraw his complaint against the payment of part of the sum. But things don't go as planned.",
        year: 2021,
      },
      {
        image: spiritedAway,
        title: "Spirited Away",
        description: "Animated, Fantasy",
        rating: 5,
        category: "ghibli",
        onAddToWatch: () => console.log("Added Spirited Away"),
        director: "Hayao Miyazaki",
        runtime: "125",
        cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
        moreDescription:
          "A young girl, Chihiro, becomes trapped in a strange and magical world of spirits. She must find her courage to save her parents and escape back to the real world, working in a mysterious bathhouse ruled by the witch Yubaba.",
        year: 2001,
      },
      {
        image: stolen,
        title: "Stolen (2023)",
        description: "Drama, True Story",
        rating: 4,
        category: "indian",
        onAddToWatch: () => console.log("Added Poster"),
        moreDescription: "At a railway station in rural India, Gautam picks up his brother Raman for a lavish wedding. But their plans are derailed when they encounter Jhumpa, a desperate mother searching for her kidnapped baby. Together, they set off on a perilous journey to find the child, testing their beliefs, resilience, and humanity. In the wee morning hours at a remote railway station, a chance encounter changes the lives of a few young people forever. Gautam is there to pick up his brother Raman for an extravagant destination wedding. The relationship between the two brothers is already tenuous at best, and the thin veneer of familial love is further challenged when they chance upon Jhumpa Mahato. An already broken woman with little to her name, Jhumpa is beside herself with panic when she wakes from her slumber to discover her infant daughter missing.",
        director: "Karan Tejpal",
        runtime: "92",
        cast: ["Abhishek Banerjee", "Mia Maelzer", "Shubham"],
        year: 2023,
      },
      {
        image: gameNight,
        title: "Game Night",
        description: "Comedy",
        rating: 3,
        category: "guiltypleasure",
        onAddToWatch: () => console.log("Added Laptop"),
        director: "John Francis Daley, Jonathan Goldstein",
        runtime: "100",
        cast: ["Jason Bateman", "Rachel McAdams", "Kyle Chandler"],
        moreDescription:
          "A group of friends' game night turns into a real-life mystery when one of them is kidnapped. As they try to solve the clues and rescue him, they realize nothing is as it seems and hilarity ensues.",
        year: 2018,
      },
      {
        image: httyd,
        title: "How To Train Your Dragon (Animated)",
        description: "Animated",
        rating: 4,
        category: "guiltypleasure",
        onAddToWatch: () => console.log("Added HTTYD"),
        director: "Dean DeBlois, Chris Sanders",
        runtime: "98",
        cast: ["Jay Baruchel", "Gerard Butler", "America Ferrera"],
        moreDescription:
          "A misfit Viking teenager, Hiccup, befriends an injured dragon, Toothless, challenging his village's beliefs about dragons and proving that friendship can change everything.",
        year: 2010,
      },
]
