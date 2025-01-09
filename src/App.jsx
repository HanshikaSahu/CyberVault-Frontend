import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Sponsors from "./components/sponsors/Sponsors";
import LiveEventComponent from './components/events'; 
import TestimonialSection from "./components/Testimonials/TestimonialSection";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/notFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <Sponsors />
            <LiveEventComponent />
            <TestimonialSection />
          </div>
        } />
        
        {/* Fallback Route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
