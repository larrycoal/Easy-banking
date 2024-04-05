import React from "react";
import "./index.scss";
import Confetti from "../../assets/image-confetti.jpg";
import Currency from "../../assets/image-currency.jpg";
import Plane from "../../assets/image-plane.jpg";
import Restaurant from "../../assets/image-restaurant.jpg";
const Cards = ({ image, by, title, article }) => {
  return (
    <div className="card">
      <img src={image} alt="a confetti" />
      <div className="content">
        <span>{by}</span>
        <h2>{title}</h2>
        <p>{article}</p>
      </div>
    </div>
  );
};
const index = () => {
  return (
    <div className="articles-wrapper">
      <h2>Latest Articles</h2>
      <div className="cards-container">
        <Cards
          image={Currency}
          by="By Claire Robinson"
          title="Receive money in any currency with no fees"
          article="The world is getting smaller and we are becoming more mobile. So why should you be 
                   forced to only receive money in a single"
        />
        <Cards
          image={Restaurant}
          by="By Wilson Hutton"
          title="Treat yourself without worrying about money"
          article="Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you"
        />
        <Cards
          image={Plane}
          by="By Wilson Hutton"
          title="Take your Easybank card wherever you go"
          article="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you"
        />
        <Cards
          image={Confetti}
          by="By Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          article="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site"
        />
      </div>
    </div>
  );
};

export default index;
