import axios from "axios";
import { User, Product, Cart, CartItem, Order, Voucher } from "../types";

const API_URL = "https://efficient-rejoicing-production.up.railway.app"; // Sesuaikan dengan URL backend

const api = axios.create({
  baseURL: API_URL,
});

// Fungsi Login
export const loginUser = (username: string, password: string) => {
  return api.post("/login", { username, password });
};

// Fungsi Registrasi
export const registerUser = (user: Partial<User>) => {
  return api.post("/register", user);
};

// Fungsi Fetch Semua Produk
export const fetchProducts = () => {
  return api.get<Product[]>("/products");
};

// Fungsi Fetch Produk Berdasarkan ID
export const fetchProductById = (productId: number) => {
  return api.get<Product>(`/products/${productId}`);
};

// Fungsi Tambah Produk ke Keranjang
export const addToCart = (cartItem: Partial<CartItem>) => {
  return api.post("/cart", cartItem);
};

// Fungsi Fetch Keranjang Berdasarkan Customer ID
export const fetchCart = (customerId: number) => {
  return api.get<Cart>(`/cart/${customerId}`);
};

// Fungsi Fetch Semua Pesanan Berdasarkan Customer ID
export const fetchOrders = (customerId: number) => {
  return api.get<Order[]>(`/orders/${customerId}`);
};

// Fungsi Fetch Semua Produk Berdasarkan Seller ID
export const fetchProductsBySeller = (sellerId: number) => {
  return api.get<Product[]>(`/seller/${sellerId}/products`);
};

// Fungsi Tambah Produk Baru
export const addProduct = (product: Partial<Product>) => {
  return api.post("/products", product);
};

// Fungsi Update Produk Berdasarkan ID
export const updateProduct = (productId: number, product: Partial<Product>) => {
  return api.put(`/products/${productId}`, product);
};

// Fungsi Delete Produk Berdasarkan ID
export const deleteProduct = (productId: number) => {
  return api.delete(`/products/${productId}`);
};
