import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Marketplace from './pages/Marketplace';
import ContactUs from './pages/ContactUs';
import Create from './pages/Create';


function App() {
  return (
    <> 
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
