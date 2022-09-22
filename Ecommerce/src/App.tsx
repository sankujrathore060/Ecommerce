import { Cart } from "component/Cart/Cart";
import { Login } from "component/Login/Login";
import { ProductDetail } from "component/ProductDetail/ProductDetail";
import { ProductList } from "component/ProductList/ProductList";
import { Register } from "component/Register/Register";
import React, { useMemo } from "react";
import { Home } from "./component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Success } from "component/Success/Success";
import { useAppSelector } from "redux/hook";
import { IRegisterUser } from "model/User/User";
type AppProps = {};

const App: React.FC<AppProps> = () => {
  const user: IRegisterUser = useAppSelector(state => state.user.currentUser);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:category" element={<ProductList />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user && user.email ? <Home /> : <Login />} />
          <Route path="/register" element={!user || (user && user.isAdmin) ? <Register /> : <Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
