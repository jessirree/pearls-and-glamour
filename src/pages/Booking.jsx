import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [validated, setValidated] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
      });
      setValidated(false);
    }, 1500);
  };

  return (
    <div className="page-container">
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h1 className="display-4 text-primary-custom">Book Your Event</h1>
            <p className="lead">
              Ready to start planning? Fill out the form below and our team will get in touch with you soon.
            </p>
          </div>
        </Container>
      </section>
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={7}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-4 p-md-5">
                  <h3 className="mb-4 text-primary-custom">Event Booking Form</h3>
                  {showSuccess && (
                    <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                      <Alert.Heading>Booking Submitted!</Alert.Heading>
                      <p>Thank you for booking with us. We'll contact you soon to discuss your event details.</p>
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
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="phone">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            required
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your phone number.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="eventType">
                          <Form.Label>Event Type</Form.Label>
                          <Form.Control
                            required
                            as="select"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                          >
                            <option value="">Select event type</option>
                            <option>Wedding</option>
                            <option>Corporate Event</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Special Party</option>
                            <option>Funeral</option>
                          </Form.Control>
                          <Form.Control.Feedback type="invalid">
                            Please select an event type.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="eventDate">
                          <Form.Label>Event Date</Form.Label>
                          <Form.Control
                            required
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide an event date.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={12} className="mb-4">
                        <Form.Group controlId="message">
                          <Form.Label>Additional Details</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="message"
                            rows={4}
                            placeholder="Tell us more about your event (optional)"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Button
                          variant="primary"
                          type="submit"
                          className="btn-primary-custom px-4 py-2"
                          disabled={submitting}
                        >
                          {submitting ? 'Submitting...' : 'Submit Booking'}
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
    </div>
  );
};

export default Booking; 