import { ProductCard } from "./ProductCard";
import hatImg from "../assets/product-image-hat.jpg";

export default function ProductsList() {

    return (
        <>
            <ProductCard
                image={hatImg}
                title="Red Hat"
                description="Clothing"
                price={"28,000"}
                onAddToCart={() => console.log("Add to cart")}
            />
        </>
    )
}

