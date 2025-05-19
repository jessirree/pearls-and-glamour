import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  // Add testimonials here when available
  // Example:
  // {
  //   id: 1,
  //   name: 'Client Name',
  //   feedback: 'Pearls & Glamour made our wedding unforgettable! Highly recommended.',
  //   event: 'Wedding',
  // },
];

const Testimonials = () => {
  return (
    <div className="page-container">
      <section className="section-padding bg-light">
        <Container>
          <div className="section-heading">
            <h2>Client Testimonials</h2>
            <p className="lead">What our clients say about us</p>
          </div>
          <Row>
            {testimonials.length === 0 ? (
              <Col className="text-center">
                <p className="text-muted">Testimonials coming soon!</p>
              </Col>
            ) : (
              testimonials.map((testimonial) => (
                <Col key={testimonial.id} md={4} className="mb-4">
                  <Card className="border-0 shadow-sm h-100">
                    <Card.Body>
                      <Card.Text>"{testimonial.feedback}"</Card.Text>
                      <Card.Subtitle className="mb-2 text-muted">- {testimonial.name}, {testimonial.event}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Testimonials; 