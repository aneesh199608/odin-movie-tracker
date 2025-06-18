import { useWatchList } from "@/context/WatchListContext";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WatchListPage() {
    const { watchList, removeFromWatchList } = useWatchList();
    const itemCount = watchList.length;
    const itemLabel = itemCount === 1 ? "title" : "titles";

    return (
        <div className="container mx-auto py-8">
            <div className="flex items-center gap-3 mb-8">
                <h1 className="text-4xl font-bold">Your Watchlist</h1>
                <span className="bg-muted text-lg px-4 py-1 rounded-full text-muted-foreground font-semibold">
                {itemCount} {itemLabel}
                </span>
            </div>
            <div className="flex flex-col gap-8">
                {watchList.length === 0 && <div className="text-muted-foreground">No movies in your watchlist yet!</div>}
                {watchList.map((movie) => (
                <div key={movie.title} className="flex bg-card rounded-2xl border p-6 gap-6 items-start shadow-sm">
                    <img src={movie.image} alt={movie.title} className="w-32 h-48 rounded-md object-cover" />
                    <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold">{movie.title}</h2>
                        {movie.year && <span className="bg-muted px-2 py-1 rounded-lg text-xs font-semibold">{movie.year}</span>}
                        <span className="flex items-center ml-3">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.round(movie.rating) ? "text-yellow-500 fill-current" : "text-muted-foreground"}`} />
                        ))}
                        </span>
                    </div>
                    <div className="text-muted-foreground text-base">{movie.moreDescription}</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                        <span>Directed By <span className="font-semibold">{movie.director}</span></span>
                        <span className="mx-2 text-muted-foreground">|</span>
                        <span>
                        Starring {movie.cast?.join(", ")}
                        </span>
                        {movie.runtime && (
                        <>
                            <span className="mx-2 text-muted-foreground">|</span>
                            <span>{movie.runtime} min</span>
                        </>
                        )}
                    </div>
                    <div className="flex gap-2 mt-4">
                        <Button variant="default" className="font-semibold">✔️ Marked as Watched</Button>
                        <Button
                        variant="outline"
                        className="font-semibold"
                        onClick={() => removeFromWatchList(movie.title)}
                        >✖ Remove from Watchlist</Button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
    )
}