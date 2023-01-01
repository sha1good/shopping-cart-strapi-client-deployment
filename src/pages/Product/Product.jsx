import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt=""
            onClick={(event) => setSelectedImage(0)}
          />
          <img
            src={images[1]}
            alt=""
            onClick={(event) => setSelectedImage(1)}
          />
        </div>
        <div className="selectedImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Title</h2>
        <span className="price">$199.9</span>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
       <button className="addToCart">
       <AddShoppingCartIcon />
       ADD TO CART
       </button>
       <div className="links">
         <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
         </div>
         <div className="item">
         <BalanceIcon />
            ADD TO COMPARE
         </div>
       </div>
       <div className="info">
         <span>Vendor: Polo</span>
         <span>Product Type: T-Shirt</span>
         <span>Tag: T-Shirt, Women, Top</span>
       </div>
       <hr />
      <div className="info">
      <span>DESCIPTION</span>
      <hr />
      <span>ADDITIONAL INFORMATION</span>
       <hr />
       <span>FAQ</span>
      </div>
      </div>
    </div>
  );
};

export default Product;
