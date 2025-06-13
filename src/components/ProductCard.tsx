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
                <span className="text-lg font-bold">₹{price}</span>
            </div>
            <div className="flex">
                <Button
                    variant="outline"
                    className="w-full border rounded-sm"
                    onClick={onAddToCart}
                    >
                        <Plus className="mr-2" /> Add to Cart
                </Button>
            </div>
            
        </div>
    );
}