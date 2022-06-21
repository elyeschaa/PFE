import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { toast } from "react-toastify";

const EditBook = ({ books }) => {
  const { id } = useParams();
  const book = books.filter((book) => book._id === id);
  const [bookInfo, setBookInfo] = useState(...book);

  const handleBook = (e) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const editBook = () => {
    axios
      .put(`/api/books/editBook/${bookInfo._id}`, {
        ...bookInfo,
      })
      .then((res) => {
        toast.success("Le livre a été modifié");
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  return (
    <div id="profile">
      <div class="container">
        <h1 class="title">Edit book</h1>

        <div class="grid">
          <div class="form-group a">
            <label for="author">Author</label>
            <input
              id="author"
              type="text"
              name="author"
              value={bookInfo.author}
              onChange={(e) => handleBook(e)}
            />
          </div>

          <div class="form-group b">
            <label for="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={bookInfo.title}
              onChange={(e) => handleBook(e)}
            />
          </div>

          <div class="form-group email-group">
            <label for="email">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={book.date}
              onChange={(e) => handleBook(e)}
            />
          </div>

          <div class="form-group phone-group">
            <label for="type">Type</label>
            <input
              id="type"
              type="text"
              name="type"
              value={bookInfo.type}
              onChange={(e) => handleBook(e)}
            />
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              id="description"
              type="text"
              name="desciption"
              value={bookInfo.description}
              onChange={(e) => handleBook(e)}
            />
          </div>

          <div class="form-group">
            <label for="newBook">isNewBook</label>
            <input
              id="newBook"
              type="text"
              name="isNewBook"
              value={bookInfo.isNewBook}
              onChange={(e) => handleBook(e)}
            />
          </div>

          <div class="form-group">
            <label for="price">Price</label>
            <input
              id="price"
              type="number"
              name="price"
              value={bookInfo.price}
              onChange={(e) => handleBook(e)}
            />
          </div>
        </div>

        <div class="button-container">
          <button class="button" onClick={editBook}>
            Save informations
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default EditBook;
