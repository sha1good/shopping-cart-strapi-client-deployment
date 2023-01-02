import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";
//import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     img2: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title: "T-shirt",
//     desc: "Long Sleeve Graphic T-shirt",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 2,
//     img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     title: "Coat",
//     desc: "Coat Sleeve Graphic T-shirt",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
// ];

const Cart = () => {
  const data = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    data.forEach((item) => (total += item.price * item.quantity));
    return total.toFixed(2); // cos of total decimal in the DB
  };

  const stripePromise = loadStripe(
    "pk_test_51M1Bm9B9zyhx24DfdImjYTbJfDzbCUlqLmQGFFNyAgmVZ0qxB7qjcSryTc129JHYWd3FBoZp1ABqWVWXym2788TJ004QU6HHHs"
  );

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await makeRequest.post("/orders", {
        data,
      });
      dispatch(resetCart());

      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const handleCheckout = async () => {
  //   try {

  //     const response = await makeRequest.post("/orders", {
  //       data,
  //     });
  //    dispatch(resetCart());
  //    console.log(response)
  //   navigate("/success")
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} * ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="deleteIcon"
            onClick={() => dispatch(removeItemFromCart(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
      <span className="resetCart" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
