import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const Contact = () => {
  // State for form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Form validation state
  const [validated, setValidated] = useState(false);
  
  // Submission status
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    setValidated(true);
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setValidated(false);
    }, 1500);
  };

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

      {/* Contact Information and Form */}
      <section className="section-padding">
        <Container>
          <Row className="g-4">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="contact-info pe-lg-4">
                <h3 className="mb-4 text-primary-custom">Get In Touch</h3>
                <p className="mb-4">
                  Have questions about our services or want to check availability for your event date? 
                  Contact us directly or fill out the form, and we'll get back to you as soon as possible.
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
                        pearlsandglamour2@gmail.com
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
                    <a href="https://instagram.com/pearls_and_glamour_events" target="_blank" rel="noreferrer" className="social-icon">
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

            <Col lg={7}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4 p-md-5">
                  <h3 className="mb-4 text-primary-custom">Send Us a Message</h3>
                  {showSuccess && (
                    <Alert 
                      variant="success" 
                      onClose={() => setShowSuccess(false)} 
                      dismissible
                    >
                      <Alert.Heading>Message Sent!</Alert.Heading>
                      <p>
                        Thank you for reaching out to us. We'll respond to your inquiry shortly.
                      </p>
                    </Alert>
                  )}
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="name">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="email">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            required
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mb-3">
                        <Form.Group controlId="subject">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="subject"
                            placeholder="What is this regarding?"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a subject.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mb-4">
                        <Form.Group controlId="message">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            required
                            as="textarea"
                            name="message"
                            rows={5}
                            placeholder="Your message here..."
                            value={formData.message}
                            onChange={handleChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a message.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Button
                          variant="primary"
                          type="submit"
                          className="btn-primary-custom px-4 py-2"
                          disabled={submitting}
                        >
                          {submitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
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