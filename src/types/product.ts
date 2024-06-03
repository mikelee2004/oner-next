import { Category } from "./category";

export type Product = {
    id: number;
    image: string;
    name: string;
    price: number;
    category: Category;
  };