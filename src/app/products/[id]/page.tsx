
import { Product } from "@/types/product"
import { useRouter } from "next/router"

interface productProps {
    product: Product
}


const ProductPage = ({ product } : productProps) => {
    
    const router = useRouter();
    const { id } = router.query;



    return(
        <div>
            <h1> {product.id} </h1>
        </div>
    )
}