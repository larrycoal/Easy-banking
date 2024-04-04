import React from "react";
import {
  IconFacebook,
  IconInstagram,
  IconPintrest,
  IconTwitter,
  IconYoutube,
  Logo,
} from "../../assets";
import "./index.scss";

const HeaderFooter = ({ children }) => {
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
        </nav>
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
