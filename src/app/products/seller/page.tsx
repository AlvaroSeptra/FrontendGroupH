"use client";
import React, { useEffect, useState } from "react";
import { fetchProductsBySeller, addProduct } from "@/services/api";
import SellerCard from "@/components/SellerCard";
import SellerModal from "@/components/SellerModal";
import AddProductModal from "@/components/AddProductModal";
import { Product } from "@/types";

const SellerProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchProductsBySeller();
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleOpenAddProductModal = () => {
    setIsAddProductModalOpen(true);
  };

  const handleCloseAddProductModal = () => {
    setIsAddProductModalOpen(false);
  };

  const handleAddProduct = async (newProduct: Omit<Product, "id">) => {
    try {
      // Add the new product using API call
      const response = await addProduct(newProduct);
      // Add the new product to the state
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      console.error("Failed to add product", error);
    } finally {
      setIsAddProductModalOpen(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Seller Products</h1>
      <button
        onClick={handleOpenAddProductModal}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Product
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <SellerCard
            key={product.id}
            product={product}
            onAddToCart={() => console.log(`Added ${product.name} to cart`)}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <SellerModal
          isOpen={isProductModalOpen}
          onClose={handleCloseProductModal}
          product={selectedProduct}
          onAddToCart={(quantity) =>
            console.log(`Added ${quantity} ${selectedProduct.name} to cart`)
          }
        />
      )}

      {isAddProductModalOpen && (
        <AddProductModal
          isOpen={isAddProductModalOpen}
          onClose={handleCloseAddProductModal}
          onAddProduct={handleAddProduct}
        />
      )}
    </div>
  );
};

export default SellerProductsPage;
