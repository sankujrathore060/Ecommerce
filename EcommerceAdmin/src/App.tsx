import { MainContainer } from "App.Styles";
import { Login } from "components/Login/Login";
import Nabbar from "components/Nabbar/Nabbar";
import Sidebar from "components/Sidebar/Sidebar";
import { IRegisterUser } from "models/User";
import Home from "pages/Home/Home";
import { AddProduct } from "pages/Product/AddProduct/AddProduct";
import { Product } from "pages/Product/Product";
import { ProductList } from "pages/ProductList/ProductList";
import { AddUser } from "pages/User/AddUser/AddUser";
import User from "pages/User/User";
import { UserList } from "pages/UserList/UserList";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "redux/hook";

type AppProps = {};

const App: React.FC<AppProps> = ({}) => {
  
  const user: IRegisterUser = useAppSelector((state) => state.user.currentUser);
  
  const isLoggedIn = (renderComponent: React.ReactNode): React.ReactNode => {
    return user && user.email ? renderComponent : <Navigate to="/login" />
  }

  return (
    <div className="App">
      <Router>       
    
        <Nabbar />
      <Routes>
        <MainContainer>
          <Sidebar />
            <Route path="/" element={isLoggedIn(<Home />)} />     
            <Route path="/home" element={isLoggedIn(<Home />)} />
            <Route path="/users" element={isLoggedIn(<UserList />)} />
            <Route path="/user/:userId" element={isLoggedIn(<User />)} />
            <Route path="/user/addUser" element={isLoggedIn(<AddUser />)} />
            <Route path="/products" element={isLoggedIn(<ProductList />)} />
            <Route path="/product/:productId" element={isLoggedIn(<Product /> )} />
            <Route path="/product/addProduct" element={isLoggedIn(<AddProduct />)} />            
            <Route path="/login" element={<Login />} /> 
        </MainContainer>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
