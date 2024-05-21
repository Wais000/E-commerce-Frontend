import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const productCard = () => {
  return (
    <div className="product-main-card col-2">
      <Link div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <img src="images/wish.svg" alt="wishlist" />
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" className="img-fluid" alt="product image" />
          <img src="images/watch-1.avif" className="img-fluid" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Samsung</h6>
          <h5 className="product-title">new generation Mobiles</h5>
          <ReactStars
            count={5}
            size={24}
            value="4"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price"> $200.00</p>
        </div>
        <div className="action-bar position-absolute ">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              {" "}
              <img src="images/add-cart.svg" alt="add to cart" />
            </Link>
          </div>
        </div>
        </Link>
    </div>
  );
};

export default productCard;
