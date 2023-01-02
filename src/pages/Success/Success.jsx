import { Link } from "react-router-dom";
import "./Success.scss";

const Success = () => {
    console.log("Hello Success")
  return <div className="success">
   <h2>Your Order has been placed.</h2>
    <Link to="/">
       
        <button style={{ padding: 10, marginTop: 20, cursor: "pointer"}}>Go to Homepage</button>
      </Link>
  </div>;
};

export default Success;
