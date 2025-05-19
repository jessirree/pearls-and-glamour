import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Providence Kiptoo',
      position: 'Founder & Creative Director',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://source.unsplash.com/300x300/?woman,professional',
    },
    {
      id: 2,
      name: 'Gladys',
      position: 'Founder & Event Planner',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://source.unsplash.com/300x300/?man,professional',
    },
  ];

  return (
    <div className="page-container">
      {/* Story Section */}
      <section className="section-padding">
        <Container>
          <div className="section-heading">
            <h2>Our Story</h2>
          </div>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="mb-4 mb-md-0">
                <h3 className="mb-4">Building Dreams Since 2025
                </h3>
                <p>
                  Pearls & Glamour Events was founded with a simple mission: to transform ordinary events into extraordinary experiences. 
                  What began as a small passion project has grown into a premier event planning service trusted by clients across the country.
                </p>
                <p>
                  Our journey started when our founders, Providence and Gladys, recognized a gap in the market for personalized, detail-oriented event 
                  planning services. They assembled a team of talented professionals 
                  who shared their vision for excellence and creativity.
                </p>
                <p>
                  Today, we pride ourselves on our ability to bring our clients' visions to life, creating memorable events that exceed expectations. 
                  From intimate gatherings to large-scale celebrations, we approach each project with the same level of dedication and enthusiasm.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="/assets/logo.jpg"
                alt="Logo"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-light">
        <Container>
          <div className="section-heading">
            <h2>Meet Our Team</h2>
            <p className="lead">The creative minds behind your perfect events</p>
          </div>
          <Row>
            {teamMembers.map((member) => (
              <Col key={member.id} md={6} className="mb-4">
                <Card className="border-0 shadow-sm h-100">
                  <Card.Img variant="top" src={member.image} alt={member.name} />
                  <Card.Body className="text-center">
                    <Card.Title as="h4">{member.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">{member.position}</Card.Subtitle>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <Container>
          <div className="section-heading">
            <h2>Our Vision & Mission</h2>
          </div>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100 bg-primary-custom text-white">
                <Card.Body className="p-4">
                  <h3 className="card-title mb-4">Our Vision</h3>
                  <p className="card-text">
                    To be the region's most trusted and innovative event planning company, known for creating 
                    unforgettable experiences that bring people together and celebrate life's important moments.
                  </p>
                  <p className="card-text">
                    We envision a world where every special occasion is marked by thoughtful planning, 
                    creative design, and flawless execution, leaving clients and their guests with cherished memories.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4">
                  <h3 className="card-title mb-4 text-primary-custom">Our Mission</h3>
                  <p className="card-text">
                    To deliver exceptional event planning services that transform our clients' visions into reality 
                    through creativity, attention to detail, and personalized care.
                  </p>
                  <p className="card-text">
                    We are committed to:
                  </p>
                  <ul>
                    <li>Understanding and exceeding our clients' expectations</li>
                    <li>Fostering relationships built on trust and integrity</li>
                    <li>Embracing innovation and staying current with industry trends</li>
                    <li>Creating stress-free planning experiences</li>
                    <li>Delivering impeccable service from concept to completion</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About; 