import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./BookDescription.css";

function BookDescription({ books, cartItems, setCartItems }) {
  const [quantity, setquantity] = useState(1);
  const [book, setBook] = useState(books);

  const { id } = useParams();

  useEffect(() => {
    setBook(books.find((book) => book._id === id));
  }, [id]);

  const addProduct = () => {
    setCartItems([...cartItems, { ...book, quantity: 1 }]);
  };

  console.log(book.bookImg);

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="card m-2 shadow p-3 mb-5 bg-white rounded">
            {/* <h1>{book.title}</h1> */}
            <img
              style={{ width: "200px", height: "300px" }}
              src={`http://localhost:3000/uploads/${book.bookImg}`}
              class="card__image"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="m-2">
            <h3>Price : {book.price} </h3>
            <hr />
            <h3>
              {/* Select Quantity :{" "} */}
              {/* <select
                  value={quantity}
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                >
                  
                  {[...Array(product.countInStock).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select> */}
            </h3>
            <hr />
            <h3>Description : {book.description}</h3>
            <hr />
            <button onClick={addProduct} className="btn">
              ADD TO CART
            </button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default BookDescription;
