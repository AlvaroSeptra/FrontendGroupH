import React, { useState, useEffect } from 'react';
import { CartItem, Cart } from '@/types';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';

const CartPage = () => {
  const [cart, setCart] = useState<Cart>({
    cartId: 1,
    customerId: 123,
    cartItems: [],
    totalPrice: 0,
  });
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch products from your API
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data.products); // Adjust according to your API response structure
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: any, quantity: number = 1) => {
    const existingCartItem = cart.cartItems.find(
      (item) => item.productId === product.id
    );

    let updatedCartItems: CartItem[];

    if (existingCartItem) {
      updatedCartItems = cart.cartItems.map((item) =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      const newCartItem: CartItem = {
        cartItemId: cart.cartItems.length + 1,
        cartId: cart.cartId,
        productId: product.id,
        quantity,
        price: product.price,
      };
      updatedCartItems = [...cart.cartItems, newCartItem];
    }

    const updatedTotalPrice = updatedCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setCart({ ...cart, cartItems: updatedCartItems, totalPrice: updatedTotalPrice });
  };

  const handleOpenModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
            onClick={() => handleOpenModal(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
          onAddToCart={(quantity) => handleAddToCart(selectedProduct, quantity)}
        />
      )}

      <h1 className="text-2xl font-bold my-4">Cart</h1>
      {cart.cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul>
            {cart.cartItems.map((item) => (
              <li key={item.cartItemId} className="mb-2">
                Product ID: {item.productId}, Quantity: {item.quantity}, Price: $
                {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold mt-4">
            Total Price: ${cart.totalPrice.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
