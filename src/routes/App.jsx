import React from "react";
import Layout from "../containers/Layout.jsx";
import NewPassword from "../pages/NewPassword.jsx";
import RecuperarPassword from "../pages/RecuperarPassword.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import NewAccount from "../pages/NewAccount.jsx";
import MyAccount from "../pages/MyAccount.jsx";
import Orders from "../pages/Orders.jsx";
import CheckOut from "../pages/CheckOut.jsx"
import CreateAccount from "../pages/CreateAccount.jsx"
import Prueba from "";
const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/password-recovery" element={<RecuperarPassword />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/new-account" element={<NewAccount/>} />
          <Route path="/my-account" element={<MyAccount/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/create-account" element={<CreateAccount/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
export default App;
