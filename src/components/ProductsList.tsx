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
        return (
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
        )
    }

