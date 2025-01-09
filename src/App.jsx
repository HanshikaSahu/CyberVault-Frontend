import React from 'react';
import LiveEventComponent from './components/events'; 
import Sponsors from "./components/sponsors/Sponsors"

import TestimonialSection from "./components/Testimonials/TestimonialSection"

function App() {
  return (
    <div>
      <Sponsors/>
      <LiveEventComponent />
     <TestimonialSection/>
    </div>
  );
}

export default App;