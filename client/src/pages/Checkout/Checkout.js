import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../components/Redux/Actions/orderAction";
import StripeCheckout from "react-stripe-checkout";
import jwt_decode from "jwt-decode";
import { Button } from "react-bootstrap";

import axios from "axios";

export default function Checkout({ cartItems, setCartItems }) {
  const { id } = jwt_decode(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const [subtotal, setSubTotal] = useState(0);
  // const orderstate = useSelector((state) => state.placeOrderReducer);

  useEffect(() => {
    cartItems.reduce((acc, el) => {
      acc = el.price * el.quantity;
      setSubTotal(acc);
      console.log(acc);
    }, 0);
  }, [cartItems]);


  function tokenHander(token) {
    dispatch(placeOrder(token, subtotal, id, cartItems));
    console.log(token);
  }

  const incrementQty = (id) => {
    const book = cartItems.find((book) => book._id === id);
    setCartItems([
      ...cartItems.filter((book) => book._id !== id),
      { ...book, quantity: book.quantity + 1 },
    ]);
  };

  const decrementQty = (id) => {
    const book = cartItems.find((book) => book._id === id);
    setCartItems([
      ...cartItems.filter((book) => book._id !== id),
      {
        ...book,
        quantity: book.quantity > 1 ? book.quantity - 1 : book.quantity,
      },
    ]);
  };

  return (
    <div>
      <div className="row" style={{ marginLeft: "33px" }}>
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>Mon livre</h2>
          {cartItems.map((item) => {
            return (
              <div>
                <div className="flex-container">
                  <div className="text-left m-1 w-100">
                    <h1>{item.title}</h1>
                    <img
                      src={`http://localhost:3000/uploads/${item.bookImg}`}
                      alt=""
                      style={{ height: "300px", width: "250px" }}
                    />
                    <h1>
                      prix : X {item.prices}
                      DT
                    </h1>
                    
                    <h1 style={{ display: "inline" }}>Quantity :</h1>
                    <Button
                      name={item._id}
                      onClick={() => incrementQty(item._id)}
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </Button>
                    {item.quantity}
                    <Button variant="danger"
                      name={item._id}
                      onClick={() => decrementQty(item._id)}
                    >
                      <i className="fa fa-minus" aria-hidden="true" s></i>
                    </Button>
                    <hr />
                  </div>

                  <div className="m-1 w-100">
                   
                  </div>
                  <div className="m-1 w-100">
                    {/* <button>
                      <i
                        className="fa fa-trash mt-5"
                        //   onClick={() => {
                        //     dispatch(deleteFromCart(item));
                        //   }}
                        aria-hidden="true"
                      ></i>
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4 text-right">
          <h2>Total : {subtotal} DT</h2>
         
          <StripeCheckout
            amount={subtotal * 100}
            shippingAddress
            token={tokenHander}
            stripeKey={
              "pk_test_51KeRR0JO42TJpmFAh6Lk7BIPUEQzHvwnMyXe0orAooVUyPOAS0Zbg29ZfCJX2qtsxPgE32UXTqqa0cjCvUyIJY8200UlMiXlqb"
            }
            currency="USD"
          >
            <Button
              style={{ marginTop: "200px", marginRight: "10px" }}
              className="btn"
            >
              Payez
            </Button>
          </StripeCheckout>
          {/* <Checkout subtotal={subtotal} /> */}
        </div>
      </div>
    </div>
  );
}
