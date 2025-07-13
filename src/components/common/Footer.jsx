import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Pearls & Glamour Events</h5>
            <p>
              Making your special events memorable with our professional planning and coordination services.
            </p>
            <div className="social-icons d-flex">
              <a href="https://facebook.com/pearls.n.glamour.events" target="_blank" rel="noreferrer" className="text-white me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://instagram.com/pearlsnglamourevents" target="_blank" rel="noreferrer" className="text-white me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://wa.me/254794788702" target="_blank" rel="noreferrer" className="text-white me-3">
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
              <a href="https://www.tiktok.com/@pearls_n_glamour_events" target="_blank" rel="noreferrer" className="text-white">
                <i className="bi bi-tiktok fs-5"></i>
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/photo-gallery" className="text-white text-decoration-none">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <p><i className="bi bi-geo-alt me-2"></i> Banda Lane, Nairobi, Kenya</p>
            <p><i className="bi bi-envelope me-2"></i> pearlsandglamour@gmail.com</p>
            <p><i className="bi bi-telephone me-2"></i> +254 794 788 702</p>
          </Col>
        </Row>
        <hr className="mt-4" />
        <div className="text-center pt-2">
          <p>&copy; {new Date().getFullYear()} Pearls & Glamour Events. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 