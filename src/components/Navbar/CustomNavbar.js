import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./CustomNavbar.css";

function CustomNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container className="upper-navbar">
          <Nav className="me-auto text-uppercase">
            <Nav.Link href="#features">Women</Nav.Link>
            <Nav.Link href="#pricing">Men</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home" className="sole-society">
            Sole Society
          </Navbar.Brand>
          <Nav className="ms-auto text-uppercase">
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="bottom-navbar"
      >
        <Container>
          <Nav className="bottom-nav d-flex justify-content-between w-100 text-uppercase">
            <Nav.Link href="#newrelease">New Release</Nav.Link>
            <Nav.Link href="#jordan">Jordan</Nav.Link>
            <Nav.Link href="#nike">Nike</Nav.Link>
            <Nav.Link href="#newbalance">New Balance</Nav.Link>
            <Nav.Link href="#adidas">Adidas</Nav.Link>
            <Nav.Link href="#luxurybrands">Luxury Brands</Nav.Link>
            <Nav.Link href="#allbrands">All Brands</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
