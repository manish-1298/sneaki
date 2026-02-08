export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Men' | 'Women' | 'Unisex' | 'Limited';
  sizes: number[];
  image: string;
  description: string;
  isNew?: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem extends Product {
  selectedSize: number;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  orders: Order[];
}

export interface Order {
  id: string;
  date: string;
  total: number;
  items: CartItem[];
  status: 'Processing' | 'Shipped' | 'Delivered';
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'newest' | 'price-asc' | 'price-desc';
}