import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from "./components/Header";
import Products from './components/pages/Products';
import SingleProduct from './components/pages/SingleProduct';
import Cart from './components/pages/Cart';
import CheckOutPage from './components/pages/CheckOutPage';
import Footer from './components/Footer';
import GalleryPage from './components/pages/GalleryPage';

function App() {
  return (
    <div className="App" basename='/sellingPS3games'>
      <Router>
        <Header />
        <Routes>
          <Route path='/sellingPS3games' element={<Home />} />
          <Route path='/sellingPS3games/products/:genre' element={<Products />} />
          <Route path='/sellingPS3games/product/:id' element={<SingleProduct />} />
          <Route path='/sellingPS3games/cart' element={<Cart />} />
          <Route path='/sellingPS3games/checkout' element={<CheckOutPage />} />
          <Route path='sellingPS3games/gallery' element={<GalleryPage />} /> 
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
