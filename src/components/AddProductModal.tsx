import React, { useState } from "react";
import axios from "axios";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: {
    name: string;
    description: string;
    price: number; // Changed from number to string
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
  const [price, setPrice] = useState(""); // Changed to string
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const userId = localStorage.getItem("id"); // Retrieve userId from local storage

  if (!isOpen || !userId) return null;

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your-cloudinary-preset"); // Replace with your Cloudinary preset

    try {
      const response = await axios.post("your-cloudinary-url", formData); // Replace with your Cloudinary URL
      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error("Image upload failed", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      handleImageUpload(file);
    }
  };

  const handleSubmit = () => {
    if (userId) {
      onAddProduct({
        name,
        description,
        price: parseFloat(price),
        category,
        quantity,
        image_url: imageUrl || "default-image-url", // Use default URL if imageUrl is empty
        sellerId: userId, // Pass the userId as sellerId
      });
      onClose(); // Close modal after submission
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
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded p-2"
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded preview"
                className="mt-4 w-full h-32 object-cover rounded"
              />
            )}
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
