import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./BookCard.css";

const BookCard = ({ books, input, rating }) => {
  const [filtredBooks, setFiltredBooks] = useState([]);

  useEffect(() => {
    setFiltredBooks(books);
  }, [books]);

  useEffect(() => {
    input === ""
      ? setFiltredBooks(books)
      : setFiltredBooks(
          filtredBooks.filter((book) => {
            return book.title
              .trim()
              .toLowerCase()
              .includes(input.trim().toLowerCase() );
          })
        );
  }, [input, rating]);
  // useEffect(() => {
  //   input === ""
  //     ? setFiltredBooks(books)
  //     : setFiltredBooks(
  //         filtredBooks.filter((book) => {
  //           return book.type
  //             .trim()
  //             .toLowerCase()
  //             .includes(input.trim().toLowerCase());
  //         })
  //       );
  // }, [input, rating]);

  return (
    <div id="booksContainer">
      {filtredBooks.map((book) => {
        return (
         
          <div key={book._id} class="container" style={{ width: "260px" }}>
            <div class="cards" style={{ bg: "" }}>
              <div class="card one">
                <div class="details">
                  <div class="content">
                    
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <h2>{book.type}</h2>
                    <ReactStars
                      count={5}
                      size={24}
                      isHalf={true}
                      edit={false}
                      value={book.rating}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <Link class="button" to={`/bookDescription/${book._id}`}>
                      VOIR PLUS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        );
      })}
    </div>
  );
};

export default BookCard;
