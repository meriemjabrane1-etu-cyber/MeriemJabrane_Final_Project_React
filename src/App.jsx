import React from 'react'
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Sale from './pages/Sale';
import Footer from './components/Footer';
import Features from './pages/Features';
import ContactSection from './components/ContactSection';
import ShopNow from './pages/ShopNow';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shop" element={<Sale />} />
        <Route path="/ContactSection" element={<ContactSection/>} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Features" element={<Features/>} />
        <Route path="/ShopNow" element={<ShopNow/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// import React from 'react';
// import Home from './pages/home/Home';
// import Navbar from './components/Navbar';
// import ContactSection from './components/ContactSection';
// import Footer from  "./components/Footer";
// import Sale from './pages/Sale';


// function App(props) {
//   return (
//     <div>
//        <Navbar />
//       <Route path="/" element={<Home />} />
//       <Route path="/Shop" element={<Sale />} />
//      <Route path="/ContactSection" element={<ContactSection />} />
//       <Route path="/Sale" element={<Sale />} />
//       <Route path="path" element={<Component />} />
//       <Footer/>
//     </div>
//   );
// }

// export default App;