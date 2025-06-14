import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface MovieCardProps {
    image: string;
    title: string;
    description: string;
    rating: number | string;
    onAddToWatch?: () => void;
    addQuantity?: number;
    category?: string;
}

export function MovieCard({
    image,
    title,
    description,
    rating,
    onAddToWatch,
    category,
    // addQuantity,
}: MovieCardProps) {
    return (
        <div className="bg-card rounded-lg border-1 p-4 w-[240px] flex flex-col gap-2">
            <div className="bg-white w-full h-auto rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-auto"
                />
            </div>
            <div className="flex w-full justify-between items-start text-start">
                <div>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <div className="text-muted-foreground text-sm">{description}</div>
                </div>
                <span className="text-lg font-bold">{rating}</span>
            </div>
            <div className="flex">
                <Button
                    variant="outline"
                    className="w-full border rounded-sm"
                    onClick={onAddToWatch}
                    >
                        <Plus className="mr-2" /> Add to Watch
                </Button>
            </div>
            
        </div>
    );
}