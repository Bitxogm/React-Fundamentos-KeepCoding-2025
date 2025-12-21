import { useState } from "react"
import { ProductForm } from "../product-form/ProductForm"
import { ProductItem } from "../product-item/ProductItem"
import type { Product } from "@features/products/types/product"

import "./products-lists.css";
import { useProducts } from "./useProducts";
import { Card } from "@core/components/card/Card";

export const ProductsList: React.FC = () => {

  const { products, addProduct, updateProduct, deleteProduct, error } = useProducts();

  const [showForm, setShowForm] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const handleAddForm = (): void => {
    if (activeProduct)
      setActiveProduct(null);
    setShowForm(true);
  }

  const handleEditForm = (product: Product): void => {
    setShowForm(true);
    setActiveProduct(product);
  };

  const handleCloseForm = (product: Product | null, isEditing?: boolean): void => {
    setShowForm(false);
    setActiveProduct(null);
    console.log(product);

    if (product) {
      if (isEditing) {
        updateProduct(product);
      } else {
        addProduct(product);
      }
    }
  };
  if (error) {
    return <div className="products-wrapper">
      <Card>
        Error: {error.message}
        </Card>
    </div>
  }

  return (
    <div className="products-wrapper">
      {showForm

        ? (<ProductForm item={activeProduct} onClose={handleCloseForm} />)
        : (
          <>
            <button onClick={handleAddForm} >Add Product</button>
            <ul>
              {products.map((item) => (
                <li key={item.id}>
                  <ProductItem
                    product={item}
                    onEdit={handleEditForm}
                    onDelete={deleteProduct}
                  />
                </li>
              ))}
            </ul>
          </>
        )
      }
    </div>
  )
}

