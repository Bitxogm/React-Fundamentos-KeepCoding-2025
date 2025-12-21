import type { Product } from "@features/products/types/product"
import { PRODUCT_LABELS } from "@features/products/types/product";
import { useNavigate } from "react-router";
import { useDetail } from "./useDetail";

type Props = {
  id: Product['id'];
}

export const ProductDetail: React.FC<Props> = ({ id }) => {


  const {product,} = useDetail({ id });

  const navigate = useNavigate();

  const handleGoBack = (): void => {
    navigate('/products');
  }

  return (
    <div>
      <h3>Product Detail : {product?.name}</h3>
      {product ? (
        <ul>
          {Object.entries(product).map(([key, value]) => (
            <li key={key}>
              <strong>{PRODUCT_LABELS[key as keyof Product] || key}:</strong> {value}
            </li>
          ))}
        <button onClick={handleGoBack} >Go back</button>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}


