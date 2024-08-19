// src/types/index.ts

export interface User {
  userId: number;
  username: string;
  email: string;
  password: string;
  location: string;
  userType: "CUSTOMER" | "SELLER";
}

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface CartItem {
  cartItemId: number;
  cartId: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface Cart {
  cartId: number;
  customerId: number;
  cartItems: CartItem[];
  totalPrice: number;
}

export interface Order {
  orderId: number;
  customerId: number;
  totalPrice: number;
  orderDate: string; // Format date-time
}

export interface Voucher {
  voucherId: number;
  sellerId: number;
  productId: number;
  discount: number; // Persentase diskon
}
