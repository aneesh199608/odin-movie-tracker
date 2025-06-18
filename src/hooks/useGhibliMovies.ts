import { useEffect, useState } from "react";
import ghibliPoster from "@/assets/studio-ghibli.jpg"
import type { Movies } from "@/types/movies";

export function useGhibliMovies(): { movies: Movies[], loading: boolean, error: string | null } {
    const [movies, setMovies] = useState<Movies[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://ghibliapi.vercel.app/films")
            .then(res => res.json())
            .then((data) => {
                setMovies(data.map((m: any) => ({
                    image: ghibliPoster,
                    title: m.title,
                    description: m.original_title_romanised,
                    rating: Math.floor(Math.random() * 3) + 3,
                    director: m.director,
                    year: m.release_date,
                    runtime: `${m.running_time}`,
                    category: "ghibli",
                    moreDescription: m.description,
                })));
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Failed to load");
                setLoading(false);
            });
    }, []);
    return { movies, loading, error };
}