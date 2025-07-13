import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="page-container">
      {/* Contact Header */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h1 className="display-4 text-primary-custom">Contact Us</h1>
            <p className="lead">
              We'd love to hear from you! Reach out with any questions about our services.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <Container>
          <Row className="g-4">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="contact-info pe-lg-4">
                <h3 className="mb-4 text-primary-custom">Get In Touch</h3>
                <p className="mb-4">
                  Have questions about our services or want to check availability for your event date? 
                  Contact us directly via email or WhatsApp, and we'll get back to you as soon as possible.
                </p>

                <div className="mb-4">
                  <h5 className="mb-3">Contact Information</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <i className="bi bi-geo-alt-fill text-primary-custom me-3 fs-5"></i>
                      <div>
                        <span className="fw-bold">Address:</span><br />
                        Banda Lane, Nairobi, Kenya
                      </div>
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="bi bi-telephone-fill text-primary-custom me-3 fs-5"></i>
                      <div>
                        <span className="fw-bold">Phone:</span><br />
                        +254 794 788 702
                      </div>
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="bi bi-envelope-fill text-primary-custom me-3 fs-5"></i>
                      <div>
                        <span className="fw-bold">Email:</span><br />
                        pearlsandglamour@gmail.com
                      </div>
                    </li>
                    <li className="mb-3 d-flex">
                      <i className="bi bi-clock-fill text-primary-custom me-3 fs-5"></i>
                      <div>
                        <span className="fw-bold">Business Hours:</span><br />
                        Monday-Friday: 9am-6pm<br />
                        Saturday: 10am-4pm<br />
                        Sunday: Closed
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="social-links">
                  <h5 className="mb-3">Follow Us</h5>
                  <div className="d-flex gap-3">
                    <a href="https://facebook.com/pearls.n.glamour.events" target="_blank" rel="noreferrer" className="social-icon">
                      <i className="bi bi-facebook fs-3 text-primary-custom"></i>
                    </a>
                    <a href="https://instagram.com/pearlsnglamourevents" target="_blank" rel="noreferrer" className="social-icon">
                      <i className="bi bi-instagram fs-3 text-primary-custom"></i>
                    </a>
                    <a href="https://wa.me/254794788702" target="_blank" rel="noreferrer" className="social-icon">
                      <i className="bi bi-whatsapp fs-3 text-primary-custom"></i>
                    </a>
                    <a href="https://www.tiktok.com/@pearls_n_glamour_events" target="_blank" rel="noreferrer" className="social-icon">
                      <i className="bi bi-tiktok fs-3 text-primary-custom"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="p-4 p-md-5 d-flex flex-column justify-content-center">
                  <h3 className="mb-4 text-primary-custom">Reach Out</h3>
                  <p className="mb-4">
                    Ready to start planning your dream event? We're here to help! 
                    Send us a message and we'll get back to you within 24 hours.
                  </p>
                  
                  <div className="d-grid gap-3">
                    <a href="mailto:pearlsandglamour@gmail.com" className="btn btn-primary-custom btn-lg">
                      <i className="bi bi-envelope-fill me-2"></i>
                      Email Us
                    </a>
                    <a href="https://wa.me/254794788702" target="_blank" rel="noreferrer" className="btn btn-success btn-lg">
                      <i className="bi bi-whatsapp me-2"></i>
                      WhatsApp Us
                    </a>
                    <a href="tel:+254794788702" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-telephone-fill me-2"></i>
                      Call Us
                    </a>
                  </div>
                  
                  <div className="mt-4 p-3 bg-light rounded">
                    <h6 className="mb-2">What to include in your message:</h6>
                    <ul className="mb-0 small">
                      <li>Type of event you're planning</li>
                      <li>Preferred date and time</li>
                      <li>Expected number of guests</li>
                      <li>Any specific requirements or themes</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-light">
        <Container>
          <div className="section-heading mb-4">
            <h2>Location</h2>
            <p className="lead">Find us on the map</p>
          </div>
          <div className="map-container ratio ratio-21x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.72004851424!2d36.761875!3d-1.365699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjEnNTYuNSIgUyAzNsKwNDUnNTEuOCIgRQ!5e0!3m2!1sen!2ske!4v1682600000000!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pearls & Glamour Events Location"
            ></iframe>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact; 