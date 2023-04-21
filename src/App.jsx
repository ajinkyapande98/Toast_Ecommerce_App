import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/main"
          element={
            <>
              <Navbar />
              <Menu />
              <Footer />
            </>
          }
        />
        <Route
          path="/event"
          element={
            <>
              <Navbar />
              <Events />
              <Footer />
            </>
          }
        />
        <Route
          path="/dessert"
          element={
            <>
              <Navbar />
              <Menu />
              <Footer />
            </>
          }
        />
        <Route
          path="/beverages"
          element={
            <>
              <Navbar />
              <Menu />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
