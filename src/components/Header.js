import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineSearchCircle } from "react-icons/hi";

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white">Free shipping worldwide</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                {" "}
                Hotline:{" "}
                <a className="text-white" href="tel:+49 0101010101">
                  +49 0101010101
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                {" "}
                <Link className=" text-white">Logo</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Product here"
                  aria-label="Search Product here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-23" id="basic-addon2">
                  <HiOutlineSearchCircle className="fs-4" />
                </span>
              </div>{" "}
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="cart-container d-flex align-items-center text-white">
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="cart-container d-flex align-items-center text-white">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favorite <br />
                      WishList
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="cart-container d-flex align-items-center text-white">
                    <img src="images/user.svg" alt="user" />
                    <p className="mb-0">
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="cart-container d-flex align-items-center text-white">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-2">
                      <span className="badge bg-white text-dark mb-0">0</span>
                      <span className="mb-0">$ 200</span>
                    </div>
                  </Link>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center menu-b-gap">
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span> Shop Categories</span>
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
