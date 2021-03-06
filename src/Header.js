import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/*logo on the left*/}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/*Search box*/}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/*3 links*/}
      <div className="header__nav">
        {/*1 links*/}
        <Link to={!user && "/Login"} className="header__link">
          <div onClick={login} className="header_option">
            <span className="header__optionLineOne">hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        {/*2 links*/}
        <Link to="/" className="header__link">
          <div className="header_option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/*3 links*/}
        <Link to="/" className="header__link">
          <div className="header_option">
            <span className="header__optionLineOne">You</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/*4 links*/}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/*basket icon with number */}
    </nav>
  );
}

export default Header;
