// components/SellerModal.tsx
import React from "react";

type SellerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    sellerId: string;
    image_url: string; // Updated to match backend field
  };
  onAddToCart: (quantity: number) => void;
};

const SellerModal: React.FC<SellerModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = React.useState(1);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside the modal from closing it
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={product.image_url} // Updated to match backend field
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-4">
          Price: ${product.price.toFixed(2)}
        </p>
        <p className="text-sm mb-4">Category: {product.category}</p>
        <p className="text-sm mb-4">Quantity: {product.quantity}</p>{" "}
        {/* Display quantity */}
        <div className="flex items-center mb-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min="1"
            className="w-12 text-center border-t border-b border-gray-300"
            readOnly
          />
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => onAddToCart(quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SellerModal;
