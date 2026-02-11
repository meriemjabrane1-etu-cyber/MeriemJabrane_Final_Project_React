import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import Footer from  "./components/Footer";


function App(props) {
  return (
    <div className=''>
      
      <Navbar />
      
      <Home/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;