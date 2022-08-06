import React from 'react';
import Navbar from 'components/Nav/Navbar';
import About from 'components/About/About';
import Contact from 'components/Contact';
import Portfolio from 'components/Portfolio';
import Resume from '.components/Resume';
import coverImage from ".assets/cover/techbg.jpg";

function App() {

  return (
    <div>
      <About />
      <Contact />
      <Navbar />
      <Portfolio />
      <Resume />
      
        
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    
      
    </div>
  );
}

export default App;