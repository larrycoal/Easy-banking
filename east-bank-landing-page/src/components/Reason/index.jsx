import React from "react";
import {
  BgIntroBck,
  IconApi,
  IconBudgeting,
  IconClose,
  IconFacebook,
  IconOnboarding,
  IconOnline,
} from "../../assets/index";
import "./index.scss";
const index = () => {
  return (
    <div className="reason-wrapper">
      <div className="top">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p>Control your finances like never before.</p>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <IconOnline />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </li>
          <li>
            <IconBudgeting />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </li>
          <li>
            <IconOnboarding />
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </li>
          <li>
            <IconApi />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
