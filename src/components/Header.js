import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"><p>Free shipping worldwide</p></div>
            <div className="col-6"><p className="text-end">  Hotline: <a href="tel:+49 0101010101">+49 0101010101</a> </p></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
