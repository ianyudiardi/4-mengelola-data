import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Product from './pages/Product';
import Navbar from './components/blocks/Navbar';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/About" element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}