
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const quantity = useSelector(state => state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser);

  // console.log(quantity);

  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <ul className="left">
            <img src="https://i.imgur.com/GShsveM.jpg" alt="" />
            {/* <li>EN</li>
            <input type="text" id="fname" name="fname" placeholder="Search"></input>
            <Search /> */}
          </ul>
          <div className="center" onClick={() => navigate("/")}>BAZAAR</div>
          <div className="right">
            <li> <Search /></li>
            <li onClick={() => navigate("/register")}>REGISTER</li>
            {user ? <li>LOGOUT</li> : <li onClick={() => navigate("/login")}>LOGIN</li>}
            <span className="cart-icon" onClick={() => navigate("/cart")}>
              <ShoppingCartOutlined />
              <span>{quantity}</span>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;