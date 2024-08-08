export interface User {
    userId: number;
    username: string;
    email: string;
    password: string;
    location: string;
    userType: 'CUSTOMER' | 'SELLER';
  }
  
  export interface Product {
    productId: number;
    sellerId: number;
    productName: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    ecoFriendly: boolean;
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
    orderDate: string;
  }
  
  export interface Voucher {
    voucherId: number;
    sellerId: number;
    voucherCode: string;
    discountPercentage: number;
  }
  