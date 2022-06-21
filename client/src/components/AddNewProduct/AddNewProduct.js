import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Error/Error";
import Success from "../Success/Success";

function AddNewProduct() {
  const [bookImg, setBookImg] = useState("");
  const [newBook, setNewBook] = useState({
    author: "",
    title: "",
    date: "",
    type: "",
    price: 0,
    rating: 0,
  });
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);
  const [button, setButton] = useState(true);


  const handleAddBook = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = async (e) => {
    const formData = new FormData();

    formData.append("author", author);
    formData.append("title", title);
    formData.append("date", date);
    formData.append("type", type);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("bookImg", bookImg);
    const config = {
      method: "POST",
      body: formData,
    };
    const req = await fetch("/api/books/createBook", config);
    if (req.ok) {
      const res = await req.json();
      setSuccess(true);
      e.preventDefault();
    }
    e.preventDefault();
  };

  useEffect(() => {
    console.log(Boolean("author"));
    if (
      author &&
      title &&
      date &&
      type &&
      price !== 0 &&
      rating !== 0 &&
      bookImg
    ) {
      setButton(false);
    }
  }, [author, title, date, type, price, rating, bookImg]);

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <h2>Ajouter un livre</h2>
          <form onSubmit={addBook}>
            <h5>Titre</h5>
            <input
              className="form-control mb-2 mr-sm-2"
              placeholder="titre"
              type="text"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <h5>Auteur</h5>
            <input
              className="form-control mb-2 mr-sm-2"
              placeholder="Nom"
              type="text"
              value={author}
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
            />
            <h5>Date de sortie</h5>
            <input
              className="form-control mb-2 mr-sm-2"
              placeholder="date"
              type="date"
              value={date}
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
            <h5>Categorie</h5>
            <input
              className="form-control mb-2 mr-sm-2"
              placeholder="type"
              type="text"
              value={type}
              name="type"
              onChange={(e) => setType(e.target.value)}
            />
            <h5>Évaluation</h5>
            <input
              className="form-control mb-2 mr-sm-2"
              placeholder="rating"
              type="number"
              value={rating}
              name="rating"
              onChange={(e) => setRating(e.target.value)}
            />
            <h5>Prix</h5>
            <input
              className="form-control mb-2 mr-sm-2"
              placeholder="price"
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <h5>Image</h5>
            <input
              type="file"
              placeholder="image"
              name="bookImg"
              accept="image/png, image/jpeg "
              onChange={(e) => setBookImg(e.target.files[0])}
            />

            <button
              type="submit"
              disabled={button}
              style={{
                float: "right",
                backgroundColor: "#0c005a",
                padding: "5px",
                borderRadius: "4px",
                color: "white",
              }}
            >
              Ajouter un livre
            </button>
            {success ? <Success success="Product Added Successfully" /> : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewProduct;
