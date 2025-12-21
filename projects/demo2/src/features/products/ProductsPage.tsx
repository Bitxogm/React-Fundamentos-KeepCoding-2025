import { ProductDetail } from "./components/product-detail/ProductDetail";
import { ProductsList } from "./components/products-list/ProductsList";
import { useParams } from "react-router";

export const ProductsPage: React.FC = () => {

  const { id } = useParams();

  return (
    <section>

      <h2>ProductsList</h2>
      {
        id
        ? <ProductDetail id={id} />
        : <ProductsList />
      }



    </section>
  )
}

export default ProductsPage;