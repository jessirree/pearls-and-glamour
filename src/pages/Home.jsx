import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  // Service highlights data
  const services = [
    {
      id: 1,
      title: 'Wedding Planning',
      description: 'From intimate ceremonies to extravagant celebrations, we create the wedding of your dreams.',
      icon: '💍',
    },
    {
      id: 2,
      title: 'Corporate Events',
      description: 'Professional planning for conferences, product launches, and company celebrations.',
      icon: '🏢',
    },
    {
      id: 3,
      title: 'Birthday Parties',
      description: 'Celebrate your special day with personalized themes and decorations.',
      icon: '🎂',
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="hero-banner"
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container className="text-center position-relative" style={{ zIndex: 1 }}>
          <h1 className="display-3 fw-bold mb-4">Pearls and Glamour Events</h1>
          <h2 className="display-6 fw-bold mb-4">Your Event | Our Precision</h2>
          <p className="lead mb-5">
          We create bespoke and luxury event experiences with elegance, precision and flawless execution!
          </p>
          <Link to="/booking">
            <Button variant="outline-light" size="lg" className="cta-button me-3">
              Book Your Dream Event Today
            </Button>
          </Link>
          <Link to="/photo-gallery">
            <Button variant="outline-light" size="lg" className="cta-button">
              View Our Photo Gallery
            </Button>
          </Link>
        </Container>
      </section>

      {/* Services Highlights */}
      <section className="section-padding bg-light">
        <Container>
          <div className="section-heading">
            <h2>Our Services</h2>
            <p className="lead">We specialize in creating unforgettable experiences</p>
          </div>
          <Row>
            {services.map((service) => (
              <Col key={service.id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm border-0 text-center">
                  <Card.Body>
                    <div className="display-4 mb-3">{service.icon}</div>
                    <Card.Title as="h3">{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Link to="/services" className="btn btn-primary-custom mt-3">
                      Learn More
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/services">
              <Button variant="primary" className="btn-primary-custom cta-button">
                Explore All Services
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary-custom text-white">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Plan Your Next Event?</h2>
          <p className="lead mb-4">Let's create something unforgettable together</p>
          <Link to="/contact">
            <Button variant="outline-light" size="lg" className="cta-button me-3">
              Contact Us
            </Button>
          </Link>
          <Link to="/booking">
            <Button variant="outline-light" size="lg" className="cta-button">
              Book Now
            </Button>
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default Home; 