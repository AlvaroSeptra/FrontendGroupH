import React from "react";

const HeroBanner = () => {
  return (
    <section
      className="hero-banner bg-cover bg-center py-24"
      style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
    >
      <div className="hero-content text-center text-white">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to Our Store</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Discover amazing products for every need.
        </p>
        <button
          type="button"
          className="rounded-md bg-[#617a4f] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#617a4f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          View our products
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
