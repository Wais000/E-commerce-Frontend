import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/blogCard";
import ProductCard from "../components/productCard";
import SpecialProduct from "../components/specialProduct";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
          <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl d-flex">
          <div className="row ">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Supercharged for pros.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*{" "}
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best sale</h4>
                    <h5>Laptops max</h5>
                    <p>
                      From $1699.00 or <br /> $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>Buy iPad air</h5>
                    <p>
                      From $599 or $49.91/mo. <br /> for 12 mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% off</h4>
                    <h5>smartwatch 7</h5>
                    <p>
                      Shop the latest band <br /> styles and colors.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Free engraving</h4>
                    <h5>AirPods max</h5>
                    <p>
                      {" "}
                      High-fidelity playback &<br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping </h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers </h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7 </h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices </h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payment </h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <h6>Computers & Laptop</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <h6>Cameras & Video</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <h6>Smart Television</h6>
                      <p>12 Items</p>
                    </div>
                    <img src="images/tv.jpg" alt="camera" />
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/headphone.jpg" alt="camera" />
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <h6>Computers & Laptop</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <h6>Cameras & Video</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <h6>Smart Television</h6>
                      <p>12 Items</p>
                    </div>
                    <img src="images/tv.jpg" alt="camera" />
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/headphone.jpg" alt="camera" />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-wrapper py-5 home-wrapper-2 ">
          <div className="container-xxl">
            <div className="section-heading">
              <h3>Featured Products</h3>
            </div>
            <div className="row gap-3">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        <section className="famous-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="famous-cart position-relative">
                  <img
                    src="images/famous-1.webp"
                    className="img-fluid"
                    alt="famous images"
                  />
                  <div className="famous-content position-absolute">
                    <h5>Big Screen</h5>
                    <h6>Smart watch series 7</h6>
                    <p>From $399or $16.62/mo. for 24 mo.*</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-cart position-relative">
                  <img
                    src="images/famous-2.webp"
                    className="img-fluid"
                    alt="famous images"
                  />
                  <div className="famous-content position-absolute">
                    <h5 className="text-dark">Studio Display</h5>
                    <h6 className="text-dark">600 nits of brightness.</h6>
                    <p className="text-dark">27-inch 5K Retina display</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-cart position-relative">
                  <img
                    src="images/famous-3.webp"
                    className="img-fluid"
                    alt="famous images"
                  />
                  <div className="famous-content position-absolute">
                    <h5 className="text-dark">smartphones</h5>
                    <h6 className="text-dark">Smartphone 13 Pro.</h6>
                    <p className="text-dark">Now in Green. From $999.00 or $41.62/mo.
for 24 mo. Footnote*</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-cart position-relative">
                  <img
                    src="images/famous-4.webp"
                    className="img-fluid"
                    alt="famous images"
                  />
                  <div className="famous-content position-absolute">
                    <h5 className="text-dark">home speakers</h5>
                    <h6 className="text-dark">Room-filling sound.</h6>
                    <p className="text-dark">From $699 or $116.58/mo. for 12 mo.*</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="special-wrapper py-5 home-wrapper-2 ">
          <div className="container-xxl">
            <div className="section-heading">
              <div className="col-12">
                <h3 className="section-heading">Special Products</h3>
              </div>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </section>

        <section className="product-wrapper py-5 home-wrapper-2 ">
          <div className="container-xxl">
            <div className="section-heading">
              <h3>Our Popular Products</h3>
            </div>
            <div className="row gap-3">
              {/* <div className="col-2"> <div className="cart"></div></div>
              <div className="col-2"> <div className="cart"></div></div> */}
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        <section className="marque-wrapper py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="marquee-inner-wrapper card-wrapper">
                  <Marquee className="d-flex flex-space-around gap-5">
                    <div className="mx-4 w-25">
                      <img src="images/brand-01.png" alt="brand" />
                    </div>
                    <img src="images/brand-02.png" alt="brand" />
                    <div className=" mx-4 w-25">
                      <img src="images/brand-03.png" alt="brand" />
                    </div>
                    <div className=" mx-4 w-25">
                      <img src="images/brand-04.png" alt="brand" />
                    </div>
                    <div className=" mx-4 w-25">
                      <img src="images/brand-05.png" alt="brand" />
                    </div>
                    <div className=" mx-4 w-25">
                      <img src="images/brand-06.png" alt="brand" />
                    </div>
                    <div className=" mx-4 w-25">
                      <img src="images/brand-07.png" alt="brand" />
                    </div>
                    <div className=" mx-4 w-25">
                      <img src="images/brand-08.png" alt="brand" />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-wrapper py-5 home-wrapper-2 ">
          <div className="container-xxl">
            <div className="section-heading">
              <h3>Our Latest Blog</h3>
            </div>
            <div className="row gap-3">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
