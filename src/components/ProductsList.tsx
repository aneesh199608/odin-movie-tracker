import { ProductCard } from "./ProductCard";

export interface Product {
    image: string;
    title: string;
    description: string;
    price: number | string;
    onAddToCart?: () => void;
    category?: string;
}

interface ProductsListProps {
    products: Product[];
    category?: string;
}

export default function ProductsList(
    {products, category}: ProductsListProps) {
        const filtered = category 
            ? products.filter((p) => p.category === category)
            : products;
        const itemCount = filtered.length;
        const itemLabel = itemCount > 1 ? "items" : "item"; 
        return (
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold capitalize">{category ?? "All"}</h2>
                    <span className="bg-muted text-sm px-3 py-1 rounded-full text-muted-foreground">
                        {itemCount} {itemLabel}
                    </span>
                </div>
            
                <div className="flex flex-wrap justify-start gap-4">
                    {filtered.map((product, idx) => (
                        <ProductCard
                            key={idx}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            onAddToCart={product.onAddToCart}
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        )
    }

