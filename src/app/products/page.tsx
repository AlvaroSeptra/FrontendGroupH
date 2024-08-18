// app/products/[[...id]]/page.tsx

"use client";

import React from "react";
import { useProducts } from "@/app/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

export default function ProductsPage() {
  const { products, loading, handleAddToCart } = useProducts();
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-10 mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product.id)}
            onClick={() => openModal(product)}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
          onAddToCart={(quantity) => {
            handleAddToCart(selectedProduct.id, quantity);
            closeModal();
          }}
        />
      )}
    </div>
  );
}
