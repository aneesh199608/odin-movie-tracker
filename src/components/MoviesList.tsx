import { MovieCard } from "./MovieCard";
import { items } from "./AppSidebar";
import { type Movies } from "@/types/movies";

interface MoviesListProps {
    movies: Movies[];
    category?: string;
}

export default function MoviesList(
    {movies, category}: MoviesListProps) {
        const displayTitle = items.find(item => item.url.split("/").pop() === (category ?? "all"))?.title ?? "All";
        const filtered = category 
            ? movies.filter((m) => m.category === category)
            : movies;
        const itemCount = filtered.length;
        const itemLabel = itemCount > 1 ? "titles" : "title"; 
        return (
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold capitalize">{displayTitle}</h2>
                    <span className="bg-muted text-sm px-3 py-1 rounded-full text-muted-foreground">
                        {itemCount} {itemLabel}
                    </span>
                </div>
            
                <div className="flex flex-wrap justify-start gap-4">
                    {filtered.map((movies, idx) => (
                        <MovieCard
                            key={idx}
                            {...movies}
                        />
                    ))}
                </div>
            </div>
        )
    }
