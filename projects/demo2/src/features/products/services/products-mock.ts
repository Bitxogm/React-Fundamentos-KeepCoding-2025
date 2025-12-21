import PRODUCTS from "../data/products.json";
import type { Product } from "../types/product";

export const getData = (): Product[] => {
  return PRODUCTS;
};

export const getDataById = (id: string): Product | undefined => {
  return PRODUCTS.find((product) => product.id === id);
}

export const getDataByIdAsync = (id:string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = PRODUCTS.find((product) => product.id === id);
      resolve(product);
    }, 1000);
  });

};

export const getDataAsync = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 1000);
  });
};



