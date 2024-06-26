import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function SpecialProduct() {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          {" "}
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">havells</h5>
            <h6 className="title">title here</h6>
            <ReactStars
              count={5}
              size={24}
              value="4"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="span red-p">$100 </span> &nbsp;
              <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10 flex-column  ">
                <div className="discount-days">
              <p className="mb-0">5 days</p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger ">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>
              </div>
              </div>
              <div className="prod-count d-flex align-items-center my-3">
                <p className="pro-title">Products: 5</p>&nbsp;
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
