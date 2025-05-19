import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

// Pages
import Home from '@pages/Home';
import About from '@pages/About';
import Services from '@pages/Services';
import PhotoGallery from '@pages/Portfolio';
import Booking from '@pages/Booking';
// import Testimonials from '@pages/Testimonials'; // Keep for future use
import Contact from '@pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/booking" element={<Booking />} />
            {/* <Route path="/testimonials" element={<Testimonials />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
