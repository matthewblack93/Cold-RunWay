import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMobileMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav>
      <h3>
        <Link>COLD RUNWAY</Link>
      </h3>
      <div className="DesktopMenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Our Products</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="AuthButton">
        <button>LOG IN</button>
        <button className="signupButton">SIGN UP</button>
      </div>
      <div className="ToggleMenu">
        <button className="toggleButton" onClick={handleMobileMenu}>
          {!toggleMenu ? (
            <AiOutlineArrowLeft size={25} />
          ) : (
            <AiOutlineArrowRight size={25} />
          )}
        </button>
      </div>
      <div
        className={!toggleMenu ? "MobileMenu" : "MobileMenu showDisplaymenu"}
      >
        <ul className="navigation-Mobile-Menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Our Products</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>

        <div className="Mobile-AuthButton">
          <button>LOG IN</button>
          <button className="signupButton">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
