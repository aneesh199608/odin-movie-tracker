import { Button } from "./ui/button";
import { Plus, Star, MonitorPlay } from "lucide-react";
import type { Movies } from "@/types/movies";
import { useWatchList } from "@/context/WatchListContext";

export function MovieCard(props: Movies) {

    const { addToWatchList, isInWatchList, removeFromWatchList } = useWatchList();
    const { image, title, description, rating } = props;

    return (
        <div className="bg-card rounded-lg border-1 p-4 w-[200px] flex flex-col gap-2">
        <div className="bg-white w-full aspect-[2/3] rounded-lg overflow-hidden">
            <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            />
        </div>
        <div className="flex flex-col min-h-[3.75rem]">
            <h3 className="text-sm font-semibold text-start line-clamp-2 min-h-[2.5rem]" title={title}>
            {title}
            </h3>
            <div className="flex-grow flex items-end">
            <div className="flex items-center justify-between w-full text-xs text-muted-foreground gap-2">
                <div className="truncate">{description}</div>
                <div className="flex items-center gap-0.5 flex-shrink-0">
                {Array.from({ length: 5 }, (_, i) => (
                    <Star
                    key={i}
                    className={`w-2 h-2 ${i < Math.round(rating) ? "text-yellow-500 fill-current" : "text-muted-foreground"}`}
                    />
                ))}
                </div>
            </div>
            </div>
        </div>

        <div className="flex">
            <Button
                className={`w-full border rounded-sm ${isInWatchList(title)
                    ? "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200"
                    : ""}`}
                variant={isInWatchList(title) ? "secondary" : "outline"}
                onClick={() => {
                    if (isInWatchList(title)) {
                    removeFromWatchList(title);
                    } else {
                    addToWatchList(props);
                    }
                }}
                >
                {isInWatchList(title)
                    ? (<><MonitorPlay className="mr-2" /> Time to Watch</>)
                    : (<><Plus className="mr-2" /> Add to Watch</>)
                }
            </Button>

        </div>
        </div>
    );
}