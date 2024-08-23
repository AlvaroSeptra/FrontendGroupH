import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductModal from "./ProductModal";
import styles from "./ProductCard.module.css";
import { useCart } from "./CartContext";

interface ProductCardProps {
  product: {
    id: number;
    image: string;
    category: string;
    name: string;
    rating?: number;
    price: number;
  };
  oldPrice?: string;
  discount?: string;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  oldPrice,
  discount,
  onAddToCart,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    console.log("Card clicked!"); // Debugging log
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cart = useCart();

  return (
    <>
      <div className="col-lg-4 col-sm-6">
        <div
          className={`${styles.verticalProductCard} rounded-2 position-relative border-0 bg-white`}
          onClick={handleCardClick}
        >
          {discount && (
            <span
              className={`${styles.offerBadge} text-white fw-bold fs-xxs position-absolute start-0 top-0`}
            >
              {discount}
            </span>
          )}
          <div className={`${styles.thumbnail} position-relative text-center`}>
            <Image
              src={product.image}
              alt={product.name}
              width={550}
              height={400}
              className={`${styles.featureImg} img-fluid wp-post-image`}
            />
          </div>
          <div className={styles.cardContent}>
            <Link
              href={`/product-category/${product.category}`}
              className="mb-2 d-inline-block text-secondary fw-semibold fs-xxs"
            >
              {product.category}
            </Link>
            <Link
              href={`/product/${product.id}`}
              className="card-title fw-bold d-block mb-2"
              title={product.name}
            >
              {product.name}
            </Link>
            <div className="product-rating d-flex align-items-center flex-nowrap fs-xxs mb-2">
              <div className="ratting d-flex align-items-center">
                {/* <div className="star-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
                  <span style={{ width: `${(rating / 5) * 100}%` }}>
                    Rated <strong className="rating">{rating}</strong> out of 5
                  </span>
                </div> */}
              </div>
            </div>
            <h6 className={styles.price}>
              {oldPrice && (
                <del aria-hidden="true">
                  <span>${oldPrice}</span>
                </del>
              )}
              <ins>
                <span>${product.price}</span>
              </ins>
            </h6>
            <button
              className="btn btn-outline-secondary btn-md"
              onClick={(e) => {
                e.stopPropagation(); // Prevent button click from triggering card click
                cart.addToCart(product);
                console.log("OK", cart);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={{
            name: product.name,
            description: "Product description here", // Replace with actual data
            price: product.price,
            category: product.category,
            quantity: 1,
            ecoFriendly: true,
            image: product.image,
          }}
          onAddToCart={(quantity) => {
            closeModal();
            cart.addToCart(product);
          }}
        />
      )}
    </>
  );
};

export default ProductCard;
