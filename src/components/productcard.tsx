"use client";

import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  rating: number;
  reviewsCount: number;
}

const ProductCard: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // This is where you'll fetch product data from your API once it's available.
    // For now, we're using hardcoded data.
    const fetchProduct = async () => {
      const data: Product = {
        id: 1,
        imageUrl: 'https://grostore-wp.themetags.com/wp-content/uploads/2023/03/product-4-500x400.png',
        title: 'Organic Green Tea',
        price: 15.0,
        rating: 5.0,
        reviewsCount: 2,
      };
      setProduct(data);
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="horizontal-product-card flex items-center p-4 rounded-2 gap-4 shadow-lg">
      <div className="thumbnail position-relative rounded-2">
        <a href="#">
          <img
            loading="lazy"
            decoding="async"
            width="500"
            height="400"
            src={product.imageUrl}
            className="img-fluid rounded-lg"
            alt={product.title}
          />
        </a>
        <div className="product-btns product-overlay position-absolute start-0 top-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2 rounded-2">
          <a href="#" className="wishlist-btn">
            <i className="fa fa-heart-o"></i>
          </a>
          <a href="#" className="cart-btn">
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </a>
          <a href="#" className="quick-view-btn">
            <i className="fa fa-eye"></i>
          </a>
        </div>
      </div>
      <div className="card-content mt-4 mt-sm-0">
        <div className="ratting d-flex align-items-center">
          <div className="star-rating" role="img" aria-label={`Rated ${product.rating} out of 5`}>
            <span style={{ width: '100%' }}>Rated <strong className="rating">{product.rating}</strong> out of 5</span>
          </div>
          <span className="count flex-shrink-0 text-gray-500 text-sm">({product.reviewsCount} reviews)</span>
        </div>
        <a href="#" className="fw-bold text-heading title d-block text-xl">
          {product.title}
        </a>
        <div className="pricing mt-2">
          <h6 className="price text-danger text-xl font-bold">
            ${product.price.toFixed(2)}
          </h6>
        </div>
        <a href="#" className="text-sm fw-bold mt-3 inline-block text-blue-500 hover:underline">
          Shop Now <span className="ms-1"><i className="fa-solid fa-arrow-right"></i></span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
