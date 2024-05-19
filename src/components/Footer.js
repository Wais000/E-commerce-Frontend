import React from "react";
import { BsLinkedin,BsYoutube,BsInstagram    } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";


import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl footer-xxl">
          <div className="footer-row align-items-center d-flex  ">
            <div className="col-4 ">
              <div className="footer-top-data d-flex align-items-center text-white">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <address className="text-white"> DE: Hamburg City <br /> Eid, <br />22XX </address>
              <a href="tel: +49 0000000" className="mt-4 d-block mb-2 text-white">+49 000000</a>
              <a href="mailto:contact.waisn@gmail.com" className="mt-4 d-block mb-2 text-white">contact.waisn@gmail.com</a>
          <div className="social-icons ">
<a href="/"><BsYoutube className="social-media-icon"/></a>
<a href="/"><BsLinkedin  className="social-media-icon"/></a>
<a href="/"> <BsInstagram className="social-media-icon"/></a>
<a href="/"><IoLogoGithub className="social-media-icon"/></a>


          </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className=" footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1 ">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">
                  Terms & Condition Policy
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className=" footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className=" footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Powered By Wais
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
