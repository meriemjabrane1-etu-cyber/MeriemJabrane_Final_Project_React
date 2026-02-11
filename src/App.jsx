import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';


function App(props) {
  return (
    <div className=''>
      
      <Navbar />
      
      <Home/>
      <ContactSection/>
    </div>
  );
}

export default App;