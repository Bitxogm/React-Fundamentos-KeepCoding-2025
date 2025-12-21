import { Card } from "@core/components/card/Card";
import type { Product } from "@features/products/types/product"
import React, { useState } from "react";

type Props = {
  item: Product | null;
  onClose: (product: Product | null, isEditing?: boolean) => void;
}

const newProduct: Product = {
  name: "",
} as Product;

export const ProductForm: React.FC<Props> = ({ item, onClose }) => {

  const isEditing = Boolean(item);

  const [product, setProduct] = useState<Product>(item || newProduct);

  // const handlSaveProduct = (product: Product): void => {
  //   onClose(product, isEditing);
  // }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onClose(product, isEditing);
  }

  const handleReset = (): void => {
    onClose(null);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value
    });
  }


  return (
    <Card title="Product Edit Form">

      <form
        className="product-form"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
         {isEditing && "Editing Product ID: " + product.id}
        {/* Controlesd el formulario */}

        <div className="form-group">
          
          <label htmlFor="name">Name:
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="buttons-group">
          <button type="submit">{isEditing ? "Save" : "Add"}</button>
          <button type="reset">Reset</button>
        </div>
      </form>


    </Card>
  )
}
