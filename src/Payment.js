import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
          <h1>Checkout (<Link to="/checkout">{basket.length} items</Link>)</h1>
          {/* delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="Payment_address">
            <p>User</p>
            <p>123 React Lane</p>
            <p>Los Angeles,CA</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map( item=>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                         />
                     ))}
          </div>
        </div>

        {/* <div className="payment_section">
            <div className="payment_title">
                <h3>Payment method</h3>
            </div>
            <div className="payment_details">
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default Payment;
