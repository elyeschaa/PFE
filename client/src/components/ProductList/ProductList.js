import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
// import Error from "../Error/Error";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductsList({ books }) {
  const [loading, setLoading] = useState(true);
  console.log(books);
  return (
    <div>
      <h2 className="usertitle">Products List</h2>

      <table className="tbadmin table table-bodered ">
        <thead>
          <tr>
            <th>Products Name</th>
            <th>Prices</th>
            <th>Stock</th>
            <th>Products ID</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((product) => {
            return (
              <tr>
                <td>{product.title}</td>
                <td>{product.price} TND</td>
                <td>coun In stock</td>
                <td>{product._id}</td>
                <td>
                  <i
                    className="delete far fa-trash-alt mr-3 "
                    onClick={() => {
                      // dispatch(deleteProduct(product._id));
                    }}
                  ></i>{" "}
                  <Link to={`/admin/editproduct/${product._id}`}>
                    <i className="fas fa-edit"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsList;
