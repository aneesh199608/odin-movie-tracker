import { AppSidebar } from "@/components/AppSidebar" 
import ProductsList from "@/components/ProductsList"
import { defaultProducts } from "@/data/products-data"

function Products() {

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex gap-8">
            <div className="w-64 flex-shrink-0">
                <AppSidebar />
            </div>
            <div className="flex-1">
                <ProductsList products={defaultProducts} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Products