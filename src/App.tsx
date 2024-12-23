import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Roster from './components/sections/Roster';
import Sponsors from './components/sections/Sponsors';
import AnimatedBanner from './components/sections/AnimatedBanner'; // New Section
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main className="overflow-hidden">
        <Home />
        <About />
        <Roster />
        <Sponsors />
        <AnimatedBanner /> {/* Add the new section here */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
