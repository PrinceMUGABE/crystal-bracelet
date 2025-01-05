/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import VerifyPassword from "./components/auth/VerifyPassword.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
import ChangePassword from "./components/auth/ChangePassword.jsx";
import Layout from "./components/admin/Layout.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-password" element={<VerifyPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/admin/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;