import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const handleWhatsAppBooking = () => {
    const message = "Hello! I'm interested in booking an event with Pearls & Glamour. Could you please provide more information about your services and pricing?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254794788702?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary-custom">
          Pearls & Glamour Events
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/photo-gallery">
              Photo Gallery
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to="/testimonials">
              Testimonials
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link 
              className="ms-2 btn btn-primary-custom text-white"
              onClick={handleWhatsAppBooking}
              style={{ cursor: 'pointer' }}
            >
              Book Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 