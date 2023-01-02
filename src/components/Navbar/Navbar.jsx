import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const data = useSelector((state) => state.cart.cart);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1" className="link">
              Women
            </Link>
          </div>
          <div className="item">
            <Link to="/products/2" className="link">
              Men
            </Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">
            SHA1STORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <FavoriteBorderOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartOutlinedIcon />
              <span>{data.length}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
