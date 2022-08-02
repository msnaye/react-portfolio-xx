import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import coverImage from "./assets/cover/techbg.jpg";

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
      <section className="my-5">
        
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      </section>
      </main>
    </div>
  );
}

export default App;