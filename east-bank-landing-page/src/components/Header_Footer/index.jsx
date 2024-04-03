import React from "react";
import { Logo } from "../../assets";

const HeaderFooter = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Logo />
          <div>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
            <a href="/">Careers</a>
          </div>
          <button>Reqeust Invite</button>
        </nav>
      </header>
      {children}
      <footer>footer</footer>
    </>
  );
};

export default HeaderFooter;
