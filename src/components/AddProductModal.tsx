// components/AddProductModal.tsx
import React, { useState } from "react";

type AddProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: {
    name: string;
    description: string;
    price: number;
    category: string;
    quantity: number;
    ecoFriendly: boolean;
    image_url: string;
  }) => void;
};

const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  onAddProduct,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [ecoFriendly, setEcoFriendly] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onAddProduct({
      name,
      description,
      price,
      category,
      quantity,
      ecoFriendly,
      image_url: imageUrl,
    });
  };

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
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Eco-Friendly
            </label>
            <input
              type="checkbox"
              checked={ecoFriendly}
              onChange={() => setEcoFriendly(!ecoFriendly)}
              className="mr-2"
            />
            <span>Yes</span>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
