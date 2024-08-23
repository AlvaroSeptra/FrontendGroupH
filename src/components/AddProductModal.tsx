import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: {
    name: string;
    description: string;
    price: number;
    category: string;
    quantity: number;
    image_url: string;
    sellerId: string;
  }) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  onAddProduct,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
  });

  const userId = localStorage.getItem("id");

  if (!isOpen || !userId) return null;

  const validateForm = () => {
    const newErrors: any = {};
    const nameWords = name.trim().split(/\s+/);
    const descriptionWords = description.trim().split(/\s+/);

    if (!name) newErrors.name = "Name is required";
    else if (nameWords.length < 5)
      newErrors.name = "Name must be at least 5 words";

    if (!description) newErrors.description = "Description is required";
    else if (descriptionWords.length < 5)
      newErrors.description = "Description must be at least 5 words";

    if (!price || isNaN(Number(price)))
      newErrors.price = "Price is required and must be a number";

    if (!category) newErrors.category = "Category is required";

    if (quantity <= 0) newErrors.quantity = "Quantity must be greater than 0";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm() && userId) {
      onAddProduct({
        name,
        description,
        price: parseFloat(price),
        category,
        quantity,
        image_url: imageUrl || "default-image-url",
        sellerId: userId,
      });
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
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
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
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
            {errors.description && (
              <p className="text-red-600 text-sm">{errors.description}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              min="0"
            />
            {errors.price && (
              <p className="text-red-600 text-sm">{errors.price}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">Select a category</option>
              <option value="eco-friendly">Eco-Friendly</option>
              <option value="organic">Organic</option>
            </select>
            {errors.category && (
              <p className="text-red-600 text-sm">{errors.category}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-full border border-gray-300 rounded p-2"
              min="1"
            />
            {errors.quantity && (
              <p className="text-red-600 text-sm">{errors.quantity}</p>
            )}
          </div>

          <div className="mb-4">
            <ImageUpload
              value={imageUrl ? [imageUrl] : []}
              onChange={(url) => setImageUrl(url)}
              onRemove={() => setImageUrl("")}
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
