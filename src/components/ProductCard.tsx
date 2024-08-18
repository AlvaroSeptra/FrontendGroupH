// components/ProductCard.tsx

import React from "react";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string; // Add this line
  };
  onAddToCart: () => void;
  onClick: () => void; // Add this line for modal
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onClick,
}) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={product.image} // Use image URL
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-semibold mb-4">
          Price: ${product.price.toFixed(2)}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering onClick on parent
            onAddToCart();
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
