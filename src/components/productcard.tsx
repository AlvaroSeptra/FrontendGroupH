// src/components/ProductCard.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: number;
  image: string;
  category: string;
  title: string;
  rating: number;
  price: string;
  oldPrice?: string;
  discount?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  category,
  title,
  rating,
  price,
  oldPrice,
  discount
}) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className={`${styles.verticalProductCard} rounded-2 position-relative border-0 bg-white`}>
        {discount && (
          <span className={`${styles.offerBadge} text-white fw-bold fs-xxs position-absolute start-0 top-0`}>
            {discount}
          </span>
        )}
        <div className={`${styles.thumbnail} position-relative text-center`}>
          <Image
            src={`/images/${image}`}
            alt={title}
            width={550}
            height={400}
            className={`${styles.featureImg} img-fluid wp-post-image`}
          />
          <div className={`${styles.productBtns} position-absolute d-flex gap-2 flex-column`}>
            <div className="yith-wcwl-add-to-wishlist">
              <div className="yith-wcwl-add-button">
                <a href={`?add_to_wishlist=${id}`} className="add_to_wishlist single_add_to_wishlist">
                  <i className="yith-wcwl-icon fa fa-heart-o"></i>
                  <span></span>
                </a>
              </div>
            </div>
            <a href="#" className="button yith-wcqv-button" data-product_id={id}></a>
            <a href={`javascript:void(0);`} className="cart-btn" onClick={() => {/* handle compare logic */}}>
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </a>
          </div>
        </div>
        <div className={styles.cardContent}>
          <Link href={`/product-category/${category}`} className="mb-2 d-inline-block text-secondary fw-semibold fs-xxs">
            {category}
          </Link>
          <Link href={`/product/${id}`} className="card-title fw-bold d-block mb-2" title={title}>
            {title}
          </Link>
          <div className="product-rating d-flex align-items-center flex-nowrap fs-xxs mb-2">
            <div className="ratting d-flex align-items-center">
              <div className="star-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
                <span style={{ width: `${(rating / 5) * 100}%` }}>
                  Rated <strong className="rating">{rating}</strong> out of 5 based on <span className="rating">1</span> customer rating
                </span>
              </div>
            </div>
          </div>
          <h6 className={styles.price}>
            {oldPrice && <del aria-hidden="true"><span>${oldPrice}</span></del>}
            <ins><span>${price}</span></ins>
          </h6>
          <a href={`?add-to-cart=${id}`} data-quantity="1" className="btn btn-outline-secondary btn-md">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
