import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/assets/img/logo.png" alt="logo" height="190px" width="100px"/>
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;