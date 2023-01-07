import React from "react";

import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Stay } from "./components/stay";
import Common from "./components/common";

import { Image } from "./App";
import { Image2 } from "./App";
import { Image3 } from "./App";
import { Image4 } from "./App";
import { Image5 } from "./App";
import { Image6 } from "./App";

export function Fix() {
  return (
    <BrowserRouter>
      <Stay />
      <Routes>
        <Route path="/home" element={<Image2 />}></Route>
        <Route path="/bollywood" element={<Image />}></Route>
        <Route path="/technology" element={<Image3 />}></Route>
        <Route path="/hollywood" element={<Image4 />}></Route>
        <Route path="/fitness" element={<Image5 />}></Route>
        <Route path="/food" element={<Image6 />}></Route>
        <Route path="/bollywood/common" element={<Common />}></Route>
        <Route path="/home/common" element={<Common />}></Route>
        <Route path="/technology/common" element={<Common />}></Route>
        <Route path="/hollywood/common" element={<Common />}></Route>
        <Route path="/fitness/common" element={<Common />}></Route>
        <Route path="/food/common" element={<Common />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
