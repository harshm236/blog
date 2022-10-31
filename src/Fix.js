import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css"

import { Image } from "./App";
import { Image2 } from "./App";
import { Image3 } from "./App";
import { Image4 } from "./App";
import { Image5 } from "./App";
import { Image6 } from "./App";
// import { Show } from "./index";

export function Fix() {
  function Show() {
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(<Image />);
  }
  function Show2() {
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(<Image2 />);
  }
  function Show3() {
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(<Image3 />);
  }

  function Show4() {
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(<Image4 />);
  }
  function Show5() {
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(<Image5 />);
  }
  function Show6() {
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(<Image6 />);
  }
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "30px", padding: "50px" }}>
        <div style={{ transform: "rotate(-90deg)", display: "inline-block" }}>
          The
        </div>
        <b style={{ fontSize: "40px" }}>SIREN</b>
      </div>

      <div id="header">
        <button onClick={Show2}>Home</button>
        <button onClick={Show}>Bollywood</button>
        <button onClick={Show3}>Technology</button>
        <button onClick={Show4}>Hollywood</button>
        <button onClick={Show5}>Fitness</button>
        <button onClick={Show6}>Food</button>
      </div>
      <hr style={{ opacity: "20%" }}></hr>
    </>
  );
}
