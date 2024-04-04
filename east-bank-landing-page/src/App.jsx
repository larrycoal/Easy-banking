import { useState } from "react";
import HeaderFooter from "./components/Header_Footer";
import Hero from "./components/Hero";
import Reason from "./components/Reason"
function App() {
  return (
    <>
      <HeaderFooter>
        <div className="main-wrapper">
          <Hero/>
          <Reason/>
        </div>
      </HeaderFooter>
    </>
  );
}

export default App;
