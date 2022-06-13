import React from 'react'
import { Navbar, Container } from "react-bootstrap";

const home = () => {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container id="container">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        TounesTa9ra
      </Navbar.Brand>
      
    </Container>
  </Navbar></div>
  )
}

export default home