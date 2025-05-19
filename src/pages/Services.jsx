import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Wedding Planning',
    image: '/assets/wedding.jpg',
    shortDescription: 'Your perfect day deserves perfect planning.',
    description: 'From intimate ceremonies to extravagant celebrations, we create the wedding of your dreams. Our comprehensive wedding planning services ensure every detail is perfect, from the first consultation to the last dance.',
    details: [
      'Full-service wedding planning',
      'Venue selection and decoration',
      'Vendor management',
      'Day-of coordination',
      'Custom themes and styling',
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
      'Product launching and promotional events',
      'Corporate branding integration',
    ],
  },
  {
    id: 3,
    title: 'Birthday Celebrations',
    image: '/assets/birthday.jpg',
    shortDescription: 'Milestone birthdays and special celebrations tailored to your style.',
    description: 'Make your special day even more memorable with our personalized birthday celebration services. Whether it\'s a milestone birthday or an intimate gathering, we create the perfect atmosphere for your celebration.',
    details: [
      'Children and adult birthdays',
      'Theme parties',
      'Custom cakes and treats',
      'Party entertainment',
      'Decor and party favors',
    ],
  },
  {
    id: 4,
    title: 'Anniversary Parties',
    image: '/assets/anniversary.jpg',
    shortDescription: 'Honor your years together with a celebration that reflects your journey.',
    description: 'Celebrate your love story with a beautifully planned anniversary party. We help you create a romantic and meaningful celebration that honors your journey together.',
    details: [
      'Milestone celebrations',
      'Romantic themes',
      'Venue and catering',
      'Live music and entertainment',
      'Personalized decor',
    ],
  },
  {
    id: 5,
    title: 'Special Parties & Events',
    image: '/assets/special_parties.jpg',
    shortDescription: 'From bachelor parties to baby showers, we handle all your celebration needs.',
    description: 'From baby showers to graduation parties, we handle all your special occasions with care and attention to detail. Each event is uniquely tailored to celebrate your specific milestone.',
    details: [
      'Baby showers',
      'Graduations',
      'Retirement parties',
      'Holiday parties',
      'Custom celebrations',
    ],
  },
  {
    id: 6,
    title: 'Funeral Services',
    image: '/assets/funeral.jpg',
    shortDescription: 'Dignified arrangements to honor and celebrate the life of your loved one.',
    description: 'We provide compassionate and dignified funeral service planning to help honor your loved one\'s memory. Our services ensure a respectful and meaningful ceremony.',
    details: [
      'Venue arrangement',
      'Floral tributes',
      'Catering',
      'Transportation',
      'Memorial programs',
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