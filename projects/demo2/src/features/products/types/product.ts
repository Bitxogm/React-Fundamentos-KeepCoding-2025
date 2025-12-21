
export type Product = {
  id: number;
  name: string;
  price: number;
  userId: number;
  updatedAt?: string;
}

export const PRODUCT_LABELS: Record<keyof Omit<Product, 'updatedAt'>, string> = {
  id: 'ID',
  name: 'Name',
  price: 'Price',
  userId: 'User ID'
};

export type ProductDTO = Omit<Product, 'id'>
