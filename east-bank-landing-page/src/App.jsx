import { useState } from "react";
import HeaderFooter from "./components/Header_Footer";
import Hero from "./components/Hero";
import Reason from "./components/Reason"
import Articles from "./components/Articles"
function App() {
  return (
    <>
      <HeaderFooter>
        <div className="main-wrapper">
          <Hero/>
          <Reason/>
          <Articles/>
        </div>
      </HeaderFooter>
    </>
  );
}

export default App;
