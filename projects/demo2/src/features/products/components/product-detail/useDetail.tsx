import { getProductById } from "@features/products/services/products-fetch";
import type { Product } from "@features/products/types/product";
import { useEffect, useState } from "react";

export const useDetail = ({ id }: { id: Product['id'] }): { product: Product | null } => {

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const load = async (): Promise<void> => {

      try {
        const item = await getProductById(String(id));
        setProduct(item ?? null);

      } catch (error) {
        console.log((error as Error).message)
      }
    };
    load()
  }, [id]);

  return { product };
}


