import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    price: number | string;
    onAddToCart?: () => void;
    addQuantity?: number;
}

export function ProductCard({
    image,
    title,
    description,
    price,
    onAddToCart,
    // addQuantity,
}: ProductCardProps) {
    return (
        <div className="bg-card rounded-2xl shadow p-6 w-full max-w-xs flex flex-col">
            <img
                src={image}
                alt={title}
                className="rounded-xl object-cover w-full aspect-square mb-4"
            />
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <div className="text-muted-foreground text-base">{description}</div>
                </div>
                <span className="text-2xl font-bold">${price}</span>
            </div>
            <div className="flex gap-2 mt-auto">
                <Button
                    variant="outline"
                    className="flex-1 border rounded-xl"
                    onClick={onAddToCart}
                    >
                        <Plus className="mr-2" /> Add to Cart
                </Button>
            </div>
            
        </div>
    );
}