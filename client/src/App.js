//Packages
import { useEffect, useState } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

//Components
import Auteurcelebre from "./components/Auteur/Auteurcelebre";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import BookCard from "./components/BookCard/BookCard";
import Admin from "./components/Admin/Admin";

//Pages
import Home from "./pages/Home/Home";
import BookDescription from "./pages/BookDescription/BookDescription";
import Checkout from "./pages/Checkout/Checkout";
import Addbook from "./components/Modal/Addbook";

import "./App.css";
import UsersList from "./components/UserList/UserList";
import ProductsList from "./components/ProductList/ProductList";
import AddNewProduct from "./components/AddNewProduct/AddNewProduct";
import OrdersList from "./components/OrderList/OrderList";

function App() {
  const param = useParams();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [show, setShow] = useState(false);
  const [userList, setUserList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  // const location = window.location.href;

  useEffect(() => {
    axios
      .get("/api/books/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    axios
      .get("/api/admin/userList")
      .then((res) => {
        setUserList(res.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("/api/order/orderList")
      .then((res) => {
        setOrderList(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const handleModal = () => {
    setShow(!show);
  };
  // const handleAddBook = (e) => {
  //   setNewBook({ ...newBook, [e.target.name]: e.target.value });
  // };

  // const handleSetBookImg = (e) => {
  //   setBookImg(e.target.files[0]);
  // };

  return (
    <div className="App">
      <Nav
        input={input}
        handleInput={handleInput}
        rating={rating}
        handleRating={handleRating}
        cartItems={cartItems}
        handleModal={handleModal}
      />
      <Addbook
        show={show}
        handleModal={handleModal}
        // newBook={newBook}
        // handleAddBook={handleAddBook}
        // handleSetBookImg={handleSetBookImg}
        // bookImg={bookImg}
      />
      <Switch>
        <Route exact path="/ateurCelebre" render={() => <Auteurcelebre />} />
        <Route
          path="/bookList"
          render={() => (
            <BookCard books={books} input={input} rating={rating} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <Home books={books} loading={loading} />}
        />
        <Route
          path="/bookDescription/:id"
          render={() => (
            <BookDescription
              books={books}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          )}
        />
        Quantity
        <Route
          path="/checkout"
          render={() => (
            <Checkout
              books={books}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          )}
        />
        <Route path="/register" render={() => <Register />} />
        <Route path="/login" render={() => <Login />} />
        <Route
          exact
          path="/admin/usersList"
          render={() => <UsersList userList={userList} />}
        />
        <Route
          exact
          path="/admin/productsList"
          render={() => <ProductsList books={books} />}
        />
        <Route
          exact
          path="/admin/addNewProduct"
          render={() => <AddNewProduct />}
        />
        <Route
          exact
          path="/admin/ordersList"
          render={() => <OrdersList orderList={orderList} />}
        />
        {localStorage.getItem("token") ? (
          jwt_decode(localStorage.getItem("token")).isAdmin ? (
            <Route path="/admin" render={() => <Admin />} />
          ) : (
            <Redirect to="/" />
          )
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
