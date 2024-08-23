"use client";
import React, { useEffect, useState } from "react";
import { fetchProductsBySeller } from "@/services/api";
import SellerCard from "@/components/SellerCard";
import SellerModal from "@/components/SellerModal";
import AddProductModal from "@/components/AddProductModal";
import { Product } from "@/types";
import SearchBar from "@/components/SearchBar";
import FilterCategory from "@/components/FilterCategory";

const SellerProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchProductsBySeller();
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize with all products
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

  const handleAddProduct = async (newProduct: Omit<Product, 'id' | 'sellerId'>) => {
    try {
<<<<<<< HEAD
      const response = await addProduct(newProduct);
      setProducts((prevProducts) => [...prevProducts, response.data]);
      setFilteredProducts((prevProducts) => [...prevProducts, response.data]);
=======
      // Assuming there's a function to add a product
      // You need to adjust this to fit your actual implementation
      // await addProduct(newProduct);

      // After adding the product, you might want to refetch the products or update the local state
      const response = await fetchProductsBySeller(); // Refetch to include the new product
      setProducts(response.data);

      console.log("New product added:", newProduct);
>>>>>>> origin/main
    } catch (error) {
      console.error("Failed to add product", error);
    } finally {
      setIsAddProductModalOpen(false);
    }
  };

  const handleSearch = (searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page after search
  };

  const handleFilterCategory = (category: string) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1); // Reset to first page after filtering
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
<<<<<<< HEAD
    <div className="container mx-auto p-4 pt-8">
      <h1 className="text-2xl font-bold mb-4">Seller Products</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterCategory onFilterCategory={handleFilterCategory} />
      <button
        onClick={handleOpenAddProductModal}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Product
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <SellerCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
=======
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Seller Products</h1>
        
        {/* Centered Add Product Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleOpenAddProductModal}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Add Product
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {products.map((product) => (
            <SellerCard
              key={product.id}
              product={product}
              onAddToCart={() => console.log(`Added ${product.name} to cart`)}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </main>
>>>>>>> origin/main

      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 mx-1 ${
                number === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border border-blue-500"
              } rounded`}
            >
              {number}
            </button>
          )
        )}
      </div>

      {selectedProduct && (
        <SellerModal
          isOpen={isProductModalOpen}
          onClose={handleCloseProductModal}
          product={selectedProduct}
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
