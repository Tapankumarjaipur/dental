import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import About from "./components/About";
import Tips from "./components/Tips";
import Testimonials from "./components/Testimonials";
import BookAppointment from "./components/BookAppointment";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <About />
      <Tips />
      <BookAppointment />
      <Testimonials />
      <Footer />
      
    </div>
  );
}

export default App;
