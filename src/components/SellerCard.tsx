import React from "react";
import { Product } from "@/types";

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

const SellerCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      key={product.id}
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={product.image_url || "/paper-bag.png"} // Use the path to the default image
        alt={product.name}
        className="w-full h-48 object-cover"
        loading="lazy" // Add lazy loading here
        onError={(e) => {
          // Provide a fallback image if there's an error loading the image
          e.currentTarget.src = "/paper-bag.png";
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-semibold mb-4">
          Price: $
          {product.price !== undefined
            ? product.price.toFixed(2) // Format the price if it's defined
            : "0.00"}{" "}
          {/* Fallback to '0.00' if price is undefined */}
        </p>
        <p className="text-sm mb-2">
          Quantity: {product.quantity} {/* Display the quantity */}
        </p>
        <p className="text-sm text-gray-500">
          Category: {product.category} {/* Display the category */}
        </p>
      </div>
    </div>
  );
};

export default SellerCard;
