import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage/HomePage.jsx";
import SignupPage from "../SignupPage/SignupPage.jsx";
import LoginPage from "../LoginPage/LoginPage.jsx";

import { ProtectedRoute } from "../../utils/route";
import NavBar from "../../components/NavBar/NavBar";
import MyProducts from "../MyProducts/MyProducts.jsx";
import CreateProduct from "../CreateProduct/CreateProduct.jsx";

import EditPage from "../EditPage/EditPage.jsx";

import DetailPage from "../DetailPage/DetailPage.jsx";

function App() {
  return (
    <div>
      <header className="header">
        <p>MERN Skeleton</p> <NavBar />
      </header>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/edit/:id" element={<EditPage />} />
        <Route exact path="/detail/:id" element={<DetailPage />} />

        <Route exact path="/create" element={ <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>}/>
        <Route
          exact
          path="/myproducts/"
          element={
            <ProtectedRoute>
              <MyProducts />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
