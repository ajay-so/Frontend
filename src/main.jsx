
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";  //why this error is occupied i don't understand
import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import HomePage from "./HomePage.jsx";
import AddProduct from "./AddProduct.jsx"; //why this error is occupied i don't understand
import Footer from "./Footer.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className="d-flex flex-column min-vh-100"> //this code give me the chatgpt because the footer not fixed the right position
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
