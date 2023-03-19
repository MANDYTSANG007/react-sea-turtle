import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter basename="/react-sea-turtle">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;





