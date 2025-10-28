export interface Product {
  id: number;
  name: string;
  category: string;
  subCategory?: string;
  price: string;
  imageUrl: string;
  gallery?: string[];
  description: string;
  details: string[];
  about?: {
      title: string;
      content: string;
      imageUrl: string;
  }[];
  schematicUrl?: string;
  dimensions?: { [key: string]: string };
  specifications?: { name: string; value: string }[];
  materialOptions?: {
    title: string;
    options: { name: string; value: string }[];
  }[];
}