import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import coverImage from "./assets/cover/techbg.jpg";
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;//
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main>
      <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      <Routes>
        <Route path="/" element={<About />} />;
        <Route path='/resume' element ={<Resume />} />;
        <Route path='/portfolio' element ={<Portfolio />} />;
        <Route path='/contact' element ={<Contact />} />;
        <Resume />;
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      </Routes>
      <footer>
      <Footer></Footer>
        </footer>

    </main>
  )
}
export default PageContainer;