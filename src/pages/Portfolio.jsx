import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const imageCount = 27;
const galleryImages = Array.from({ length: imageCount }, (_, i) => `/assets/pic${i + 1}.jpg`);

const PhotoGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShowModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="page-container">
      {/* Photo Gallery Header */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h1 className="display-4 text-primary-custom">Photo Gallery</h1>
            <p className="lead">
              Explore our gallery of memorable moments and beautiful events.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <Container>
          <Row>
            {galleryImages.map((img, idx) => (
              <Col key={img} lg={4} md={6} sm={12} className="mb-4">
                <Card className="portfolio-card h-100 shadow-sm border-0">
                  <div
                    className="portfolio-img-wrapper"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleShowModal(idx)}
                  >
                    <Card.Img
                      variant="top"
                      src={img}
                      alt={`Photo Gallery ${idx + 1}`}
                      className="portfolio-img"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="portfolio-overlay">
                      <div className="overlay-content">
                        <i className="bi bi-search fs-3"></i>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Body className="p-0">
          <div className="position-relative">
            <img
              src={galleryImages[currentIndex]}
              alt={`Photo Gallery ${currentIndex + 1}`}
              className="img-fluid w-100"
              style={{ maxHeight: '70vh', objectFit: 'contain' }}
            />
            <Button
              variant="light"
              className="position-absolute top-50 start-0 translate-middle-y rounded-circle p-2"
              onClick={handlePrev}
            >
              <i className="bi bi-chevron-left fs-4"></i>
            </Button>
            <Button
              variant="light"
              className="position-absolute top-50 end-0 translate-middle-y rounded-circle p-2"
              onClick={handleNext}
            >
              <i className="bi bi-chevron-right fs-4"></i>
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* CTA Section */}
      <section className="py-5 bg-primary-custom text-white">
        <Container className="text-center">
          <h2 className="mb-4">Ready to plan your own event?</h2>
          <p className="lead mb-4">Let us help you create a memorable experience</p>
          <Button
            variant="light"
            size="lg"
            className="cta-button"
            href="/booking"
          >
            Book Your Event Now
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default PhotoGallery; 