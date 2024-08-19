import { Cpu, Paperclip, Construction, GlassWater, InspectionPanel } from 'lucide-react';

export function FeatureCard() {
    return (
        <div className="px-2 py-2 md:px-6 md:py-10 mt-10 mb-4 ml-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl">
                        Weekly Best Deals
                    </h1>
                    <p className="my-2 text-gray-600">
                        Discover the best deals on fresh and organic products available this week.
                    </p>
                </div>
                {/* Horizontal Countdown Timer */}
                <ul className="flex items-center gap-4">
                    <li className="flex flex-col items-center justify-center bg-gray-200 p-2 rounded-md">
                        <h5 className="text-xl font-bold text-black">00</h5>
                        <span className="text-gray-600 text-sm">Days</span>
                    </li>
                    <li className="flex flex-col items-center justify-center bg-gray-200 p-2 rounded-md">
                        <h5 className="text-xl font-bold text-black">00</h5>
                        <span className="text-gray-600 text-sm">Hours</span>
                    </li>
                    <li className="flex flex-col items-center justify-center bg-gray-200 p-2 rounded-md">
                        <h5 className="text-xl font-bold text-black">00</h5>
                        <span className="text-gray-600 text-sm">Min</span>
                    </li>
                    <li className="flex flex-col items-center justify-center bg-gray-200 p-2 rounded-md">
                        <h5 className="text-xl font-bold text-black">00</h5>
                        <span className="text-gray-600 text-sm">Sec</span>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
                {/* Product 1 */}
                <div className="horizontal-product-card flex items-center p-4 rounded-2 gap-4 shadow-lg">
                    <div className="thumbnail position-relative rounded-2">
                        <a href="#">
                            <img 
                                loading="lazy" 
                                decoding="async" 
                                width="500" 
                                height="400" 
                                src="https://grostore-wp.themetags.com/wp-content/uploads/2023/03/product-1-500x400.png" 
                                className="img-fluid rounded-lg" 
                                alt="Organic Peas" 
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
                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                <span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5</span>
                            </div>
                            <span className="count flex-shrink-0 text-gray-500 text-sm">(1 review)</span>
                        </div>
                        <a href="#" className="fw-bold text-heading title d-block text-xl">
                                Organic Peas
                        </a>
                        <div className="pricing mt-2">
                            <h6 className="price text-danger text-xl font-bold">
                                $30.00
                            </h6>
                        </div>
                        <a href="#" className="text-sm fw-bold mt-3 inline-block text-blue-500 hover:underline">
                            Shop Now <span className="ms-1"><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
                {/* Product 2 */}
                <div className="horizontal-product-card flex items-center p-4 rounded-2 gap-4 shadow-lg">
                    <div className="thumbnail position-relative rounded-2">
                        <a href="#">
                            <img 
                                loading="lazy" 
                                decoding="async" 
                                width="500" 
                                height="400" 
                                src="https://grostore-wp.themetags.com/wp-content/uploads/2023/03/product-2-500x400.png" 
                                className="img-fluid rounded-lg" 
                                alt="Avocado" 
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
                            <div className="star-rating" role="img" aria-label="Rated 4.50 out of 5">
                                <span style={{ width: '90%' }}>Rated <strong className="rating">5.00</strong> out of 5</span>
                            </div>
                            <span className="count flex-shrink-0 text-gray-500 text-sm">(1 reviews)</span>
                        </div>
                        <a href="#" className="fw-bold text-heading title d-block text-xl">
                            Avocado
                        </a>
                        <div className="pricing mt-2">
                            <h6 className="price text-danger text-xl font-bold">
                                $25.00
                            </h6>
                        </div>
                        <a href="#" className="text-sm fw-bold mt-3 inline-block text-blue-500 hover:underline">
                            Shop Now <span className="ms-1"><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
                {/* Product 3 */}
                <div className="horizontal-product-card flex items-center p-4 rounded-2 gap-4 shadow-lg">
                    <div className="thumbnail position-relative rounded-2">
                        <a href="#">
                            <img 
                                loading="lazy" 
                                decoding="async" 
                                width="500" 
                                height="400" 
                                src="https://grostore-wp.themetags.com/wp-content/uploads/2023/03/product-3-500x400.png" 
                                className="img-fluid rounded-lg" 
                                alt="Pistachio Nuts" 
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
                            <div className="star-rating" role="img" aria-label="Rated 4.00 out of 5">
                                <span style={{ width: '80%' }}>Rated <strong className="rating">5.00</strong> out of 5</span>
                            </div>
                            <span className="count flex-shrink-0 text-gray-500 text-sm">(1 reviews)</span>
                        </div>
                        <a href="#" className="fw-bold text-heading title d-block text-xl">
                            Pistachio Nuts
                        </a>
                        <div className="pricing mt-2">
                            <h6 className="price text-danger text-xl font-bold">
                                $40.00
                            </h6>
                        </div>
                        <a href="#" className="text-sm fw-bold mt-3 inline-block text-blue-500 hover:underline">
                            Shop Now <span className="ms-1"><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
                {/* Product 4 */}
                <div className="horizontal-product-card flex items-center p-4 rounded-2 gap-4 shadow-lg">
                    <div className="thumbnail position-relative rounded-2">
                        <a href="#">
                            <img 
                                loading="lazy" 
                                decoding="async" 
                                width="500" 
                                height="400" 
                                src="https://grostore-wp.themetags.com/wp-content/uploads/2023/03/product-4-500x400.png" 
                                className="img-fluid rounded-lg" 
                                alt="Tomato" 
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
                            <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                <span style={{ width: '100%' }}>Rated <strong className="rating">5.00</strong> out of 5</span>
                            </div>
                            <span className="count flex-shrink-0 text-gray-500 text-sm">(1 reviews)</span>
                        </div>
                        <a href="#" className="fw-bold text-heading title d-block text-xl">
                            Tomato
                        </a>
                        <div className="pricing mt-2">
                            <h6 className="price text-danger text-xl font-bold">
                                $15.00
                            </h6>
                        </div>
                        <a href="#" className="text-sm fw-bold mt-3 inline-block text-blue-500 hover:underline">
                            Shop Now <span className="ms-1"><i className="fa-solid fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;
