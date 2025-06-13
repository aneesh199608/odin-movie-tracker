import { AppSidebar } from "@/components/AppSidebar" 
import ProductsList from "@/components/ProductsList"
import { defaultProducts } from "@/data/products-data"
import { useParams } from "react-router-dom"

function Products() {
    const {category} = useParams();
    const selectedCategory = category === "all" || !category ? undefined : category;

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex gap-8">
            <div className="w-64 flex-shrink-0">
                <AppSidebar />
            </div>
            <div className="flex-1">
                <ProductsList products={defaultProducts} category={selectedCategory} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Products