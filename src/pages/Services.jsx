import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Wedding Planning',
    image: '/assets/wedding.jpg',
    shortDescription: 'Your perfect day deserves perfect planning.',
    description: 'Our comprehensive wedding planning service covers everything from all tent types, tables and chairs to decor. We work closely with you to bring your vision to life, handling all the details so you can enjoy your special day worry-free. We also assist with marriage proposals to start your journey beautifully.',
    details: [
      'Custom decor and rentals',
      'Venue consultation',
      'Budget planning and tracking',
      'Photography and videography',
      'Audio-visual setup and support',
      'Stunning backdrops and centerpieces',
      'Day-of coordination',
      'Timeline creation and management',
    ],
  },
  {
    id: 2,
    title: 'Corporate Events',
    image: '/assets/corporate.jpg',
    shortDescription: 'Impress clients and motivate employees with professional corporate events.',
    description: 'From product launches and annual meetings to team-building retreats and client appreciation events, our corporate event planning services ensure a seamless and impressive experience that aligns with your company goals and brand identity. We also handle promotional events to showcase your products or services in the most appealing way.',
    details: [
      'Venue consultation',
      'Custom decor and rentals',
      'Audio-visual setup and support',
      'Photography and videography',
      'Product launching and promotional events',
      'Corporate branding integration',
    ],
  },
  {
    id: 3,
    title: 'Birthday Celebrations',
    image: '/assets/birthday.jpg',
    shortDescription: 'Milestone birthdays and special celebrations tailored to your style.',
    description: 'Whether it\'s a child\'s themed party, a surprise 30th, or a sophisticated 50th birthday gala, we create personalized celebrations that reflect the guest of honor\'s personality and preferences, making their special day truly memorable. Our birthday planning covers all ages and styles.',
    details: [
      'Custom theme development',
        'Decoration and setup',
        'Entertainment booking',
        'Photography and videography',
        'Venue consultation',
        'Surprise party planning'
    ],
  },
  {
    id: 4,
    title: 'Anniversary Parties',
    image: '/assets/anniversary.jpg',
    shortDescription: 'Honor your years together with a celebration that reflects your journey.',
    description: 'Whether you\'re celebrating one year or fifty, our anniversary party planning services help you commemorate your special milestone with a celebration that honors your unique love story and the journey you\'ve shared together. We create memorable experiences that celebrate your commitment.',
    details: [
      'Venue consultation',
      'Custom anniversary themes',
      'Memory displays and slideshows',
      'Entertainment and music',
      'Photography and videography',
      'Personalized anniversary gifts'
    ],
  },
  {
    id: 5,
    title: 'Special Parties & Events',
    image: '/assets/special_parties.jpg',
    shortDescription: 'From bachelor parties to baby showers, we handle all your celebration needs.',
    description: 'Our comprehensive party planning services cover a wide range of celebrations including graduation parties, marriage proposals, bachelor and bachelorette parties, baby showers, elegant dinner parties, and more. Whatever the occasion, we create custom experiences that delight guests and create lasting memories. Our attention to detail ensures every party is perfectly executed.',
    details: [
      'Custom-themed events',
      'Entertainment coordination',
      'Photography and videography',
      'Venue consultation',
      'Custom decor and rentals'
    ],
  },
  {
    id: 6,
    title: 'Funeral Services',
    image: '/assets/funeral.jpg',
    shortDescription: 'Dignified arrangements to honor and celebrate the life of your loved one.',
    description: 'We provide compassionate and dignified funeral service planning to help honor your loved one\'s memory. Our services ensure a respectful and meaningful ceremony.',
    details: [
      'Custom memorial displays and tributes',
      'Flower arrangements and decor',
      'Program design and printing',
      'Photography and videography',
      'Audio-visual setup and support',
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div className="page-container">
      <section className="section-padding">
        <Container>
          <div className="section-heading">
            <h2>Our Services</h2>
            <p className="lead">Discover what we offer to make your event unforgettable</p>
          </div>
          <Row>
            {servicesData.map((service) => (
              <Col key={service.id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    alt={service.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title as="h3">{service.title}</Card.Title>
                    <Card.Text className="mb-3">{service.shortDescription}</Card.Text>
                    <Button
                      variant="primary"
                      className="w-100 mt-3 btn-primary-custom"
                      onClick={() => handleShowModal(service)}
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Modal for service details */}
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
          {selectedService && (
            <>
              <Modal.Header closeButton>
                <Modal.Title style={{ color: '#bfa046', fontWeight: 'bold' }}>
                  {selectedService.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="mb-3"
                  style={{ maxWidth: '100%', borderRadius: '8px' }}
                />
                <p className="mb-4">{selectedService.description}</p>
                <h4 className="mb-3">What's Included:</h4>
                <ul className="list-unstyled">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary-custom me-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button
                  className="btn-primary-custom"
                  onClick={() => {
                    setShowModal(false);
                    navigate('/booking');
                  }}
                >
                  Book This Service
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </section>
    </div>
  );
};

export default Services; 