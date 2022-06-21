import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductsList({ books }) {
  return (
    <div>
      <h2 className="usertitle">Liste de produits</h2>

      <table className="tbadmin table table-bodered ">
        <thead>
          <tr>
            <th>Nom du produit</th>
            <th>Prix</th>
            <th>Stock</th>
            <th>Produits ID</th>
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
                      axios
                        .delete(`/api/books/deleteBook/${product._id}`)
                        .then((res) => {
                          toast.success(`${product.title} a été supprimé`);
                          window.location.reload();
                        })
                        .catch((err) => console.log(err));
                    }}
                  ></i>{" "}
                  <Link to={`/admin/editBook/${product._id}`}>
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
