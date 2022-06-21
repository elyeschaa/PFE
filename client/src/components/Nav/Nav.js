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


  return (
    <div>
      {logged ? (
        <Navbar
          bg="#56bfb5"
          variant="#56bfb5"
          style={{ backgroundColor: "#0c005a",height:" 120px " }}
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
                    fontSize: "12px",
                    marginTop: "5px",
                    // height:"37px",
                    // background: "#6dc6e3",
                    textDecoration: "none",
                    color: "white",
                    borderRadius: "20px",
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
                      fontSize: "12px",
                marginTop: "5px",
                      // height:"37px",
                      // background: "#6dc6e3",
                      textDecoration: "none",
                      color: "white",
                    }}
                    onClick={bookListNavigate}
                  >
                  les livres
                  </Button>
                </Link>

                <Link>
                  <Button
                    className="but"
                    style={{
                      fontSize: "12px",
                marginTop: "5px",
                      // height:"37px",
                      // background: "#6dc6e3",
                      textDecoration: "none",
                      color: "white",
                    }}
                    onClick={ateurNavigate}
                  >
                    {/* <h5 style={{ color: "bleu" }}> */}
                    Auteurs célèbres
                    {/* </h5> */}
                  </Button>
                </Link>

                <Link style={{ color: "bleu" }}>
                  <a
                    style={{
                      fontSize: "10px",
                      marginTop: "5px",
                      // height:"37px",
                      // background: "#6dc6e3",
                      textDecoration: "none",
                      color: "white",
                    }}
                    className="nav-link"
                    href="/cart"
                    onClick={cartNavigate}
                  >
                    Panier : {cartItems.length} Items
                  </a>
                </Link>
                {/* <img
                  style={{
                    width: "25PX",
                    height: "25px",
                    marginTop: "30px",
                    marginRight: "30px",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYB28EWV01huyaUmy7FIjBgknLXIHsW13Syq6-xcjOrm2k5OvLnBXaSG6wr6pFkgDtjyo&usqp=CAU"
                /> */}
                <Link>
                  <Button
                    style={{
                      fontSize: "12px",
                      marginTop: "5px",
                      // height:"37px",
                      // background: "#6dc6e3",
                      textDecoration: "none",
                      color: "white",
                    }}
                    onClick={handleModal}
                  >
                   ajouter livres
                  </Button>
                </Link>

                <Link to="/profile">
                  <Button style={{fontSize: "12px",
                  marginTop: "5px",
                  // backgroundColor: "red",
                  color: "white",
                  border: "1px solid white",}}>Profile</Button>
                </Link>
                <Link>
               
                  <Button
                    className="but"
                    style={{
                      fontSize: "12px",
                      marginTop: "5px",
                      backgroundColor: "red",
                      color: "white",
                      border: "1px solid white",
                    }}
                    onClick={logout}
                  >
                      déconnection
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </Navbar>
      ) : (
        <Navbar  id="amin"
          bg="#0c005a"
          variant="dark"
          style={{ backgroundColor: "#0c005a" ,height:" 120px"}}
        >
          <Container id="container" >
            <Navbar.Brand  href="/">
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
                <h5 style={{ color: "white" }}>s'inscrir</h5>
              </Link>
              <Link to="/login" className="link">
                <h5 style={{ color: "white" }}>s'identifier</h5>
              </Link>
            </div>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Nav;
