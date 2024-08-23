import React from "react";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number | undefined; // Allow undefined for type safety
    image_url: string; // Only using image_url
    quantity: number;
    category: string;
    sellerId: string;
  };
  onClick: () => void;
};

const SellerCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={product.image_url} // Use image_url here
        alt={product.name}
        className="w-full h-48 object-cover"
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
