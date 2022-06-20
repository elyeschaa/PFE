import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Navbar, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import isAuth from "../../middlewares/isAuth";

const Nav = ({
  input,
  handleInput,
  rating,
  handleRating,
  cartItems,
  handleModal,
}) => {
  const [logged, setLogged] = useState(false);
  const history = useHistory();

  useEffect(() => {
    isAuth() ? setLogged(true) : setLogged(false);
  });

  const ateurNavigate = () => {
    history.push("/ateurCelebre");
  };

  const bookListNavigate = () => {
    history.push("/bookList");
  };

  const cartNavigate = () => {
    history.push("/checkout");
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/");
    history.go(0);
  };

  console.log(cartItems);

  return (
    <div>
      {logged ? (
        <Navbar
          bg="#56bfb5"
          variant="#56bfb5"
          style={{ backgroundColor: "#0c005a", height: "120px" }}
        >
          <Container id="container">
            <Navbar.Brand href="/">
              <img
                id="tounesimg"
                alt=""
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/286480039_557839856001487_1925133778716229833_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=cXrEeuUQp5cAX9pDFzs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKHWBTuqKFDTOS67974Nf6KOQJ3UYo-VnaYxt8ineMnqA&oe=62C4DEB6"
                width="70"
                height="70"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <div>
              <div onClick={() => history.push("/bookList")}>
                <input
                  style={{
                    color: "red",
                    marginLeft: "350px",
                    borderRadius: "10px",
                    boxShadow: "inherit",
                    border: "solid ",
                  }}
                  placeholder="search "
                  value={input}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="my-links">
              <div className="input" style={{ display: "flex" }}>
                <Link>
                  <Button
                    style={{
                      borderRadius: "20px",
                      fontSize: "17px",
                      marginTop: "10px",
                    }}
                    onClick={bookListNavigate}
                  >
                    Book List
                  </Button>
                </Link>

                <Link>
                  <Button
                    className="but"
                    style={{
                      borderRadius: "20px",
                      fontSize: "17px",
                      marginTop: "10px",
                    }}
                    onClick={ateurNavigate}
                  >
                    {/* <h5 style={{ color: "bleu" }}> */}
                    Famous Authors
                    {/* </h5> */}
                  </Button>
                </Link>

                <Link style={{ color: "bleu" }}>
                  <a
                    style={{
                      borderRadius: "20px",
                      fontSize: "12px",
                      marginTop: "14px",

                      textDecoration: "none",
                      color: "white",
                    }}
                    className="nav-link"
                    href="/cart"
                    onClick={cartNavigate}
                  >
                    CART : {cartItems.length} Items
                  </a>
                </Link>
                <img
                  style={{
                    width: "25PX",
                    height: "25px",
                    marginTop: "30px",
                    marginRight: "30px",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYB28EWV01huyaUmy7FIjBgknLXIHsW13Syq6-xcjOrm2k5OvLnBXaSG6wr6pFkgDtjyo&usqp=CAU"
                />
                <Link>
                  <Button
                    style={{ marginTop: "10px", border: "1px solid white" }}
                    onClick={handleModal}
                  >
                    add book
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button style={{ marginTop: "10px" }}>Profile</Button>
                </Link>
                <Link>
                  <Button
                    className="but"
                    style={{
                      marginLeft: "10px",
                      fontSize: "17px",
                      marginTop: "10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "1px solid white",
                    }}
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          bg="#0c005a"
          variant="dark"
          style={{ backgroundColor: "#0c005a" }}
        >
          <Container id="container">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/286480039_557839856001487_1925133778716229833_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=cXrEeuUQp5cAX9pDFzs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKHWBTuqKFDTOS67974Nf6KOQJ3UYo-VnaYxt8ineMnqA&oe=62C4DEB6"
                width="70"
                height="70"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <div className="my-links">
              <Link to="/register" className="link">
                <h5 style={{ color: "white" }}>sign up</h5>
              </Link>
              <Link to="/login" className="link">
                <h5 style={{ color: "white" }}>sign in</h5>
              </Link>
            </div>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Nav;
