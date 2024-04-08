import React, { useState } from "react";
import {
  IconFacebook,
  IconInstagram,
  IconPintrest,
  IconTwitter,
  IconYoutube,
  Logo,
  IconHamburger,
  IconClose,
} from "../../assets";
import "./index.scss";

const HeaderFooter = ({ children }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <header className="header-wrapper">
        <nav>
          <Logo />
          <div className="links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
            <a href="/">Careers</a>
          </div>
          <button>Request Invite</button>
          <span
            className="hamburger"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            {!showDropDown ? <IconHamburger /> : <IconClose />}
          </span>
        </nav>
        <div
          className="mobile-links"
          style={
            showDropDown
              ? { display: "block", top: "5rem", opacity: 1 }
              : { display: "none", top: "0rem", opacity: 0 }
          }
        >
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
      </header>
      {children}
      <footer>
        <div className="left">
          <Logo color="#fff" />
          <div>
            <IconFacebook />
            <IconYoutube />
            <IconTwitter />
            <IconPintrest />
            <IconInstagram />
          </div>
        </div>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
        <div className="right">
          <button>Request Invite</button>
          <p>&#169; Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default HeaderFooter;
