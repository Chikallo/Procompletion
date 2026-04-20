import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Expertise from './components/sections/Expertise';
import Industries from './components/sections/Industries';
import Team from './components/sections/Team';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'expertise':
        return <Expertise />;
      case 'industries':
        return <Industries />;
      case 'team':
        return <Team />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;