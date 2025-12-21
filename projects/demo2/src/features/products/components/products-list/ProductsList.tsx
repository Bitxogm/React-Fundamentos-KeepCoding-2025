import { useEffect, useState } from "react"
import { ProductForm } from "../product-form/ProductForm"
import { ProductItem } from "../product-item/ProductItem"
import type { Product } from "@features/products/types/product"
import { getDataAsync } from "@features/products/services/products-mock"

import "./products-lists.css";

export const ProductsList: React.FC = () => {
  const initialProducts: Product[] = [];

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const handleUpdateProduct = (product: Product): void => {
    setProducts(products.map(item => item.id === product.id ? product : item))
  };

  const handleAddForm = (): void => {
    if (activeProduct)
      setActiveProduct(null);
    setShowForm(true);
  }

  const handleAddProduct = (product: Product): void => {
    const newId = crypto.randomUUID().slice(0, 4);  
    product.id = newId;
    console.log("Add", product);
    setProducts([ product,...products]);
  }

  const handleDeleteProduct = (product: Product): void => {
    console.log("Delete", product.id);
    setProducts(
      products.filter((item) => item.id !== product.id)
    )
  };

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
        handleUpdateProduct(product);
      } else {
        handleAddProduct(product);
      }
    }
  };

  useEffect(() => {

    getDataAsync().then(data => setProducts(data));
  }, []);

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
                    onDelete={handleDeleteProduct}
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
