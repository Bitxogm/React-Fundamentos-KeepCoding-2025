import { Card } from "@core/components/card/Card"
import type { Product } from "@features/products/types/product"
import { useNavigate } from "react-router";

type Props = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export const ProductItem: React.FC<Props> = ({ product, onEdit, onDelete }) => {

  const navigate = useNavigate()

  const handleEdit = (): void => {

    onEdit(product);
  }

  const handleDelete = (): void => {

    onDelete(product);
  }

  const handleDetail = (): void => {
    // Navigate to product detail page
    // This can be implemented using useNavigate from react-router
    navigate(`/products/${product.id}`);
  }


  return (
    <Card>
      <div>
        <p>
          Product Item
          {product.id} - {product.name}
        </p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete} >Delete</button>
        <button onClick={handleDetail} >View Details</button>
      </div>
    </Card>
  )
}
