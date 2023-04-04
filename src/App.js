import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {NavBar}  from './Components/NavBar';
import {Footer}  from './Components/Footer';
import { Home } from './Pages/Home/Home'
import { Shop } from './Pages/Shop/Shop'
import { Contact } from './Pages/Contact/Contact'
import { Cart } from './Pages/Cart/Cart'
import { ShopContextProvider } from './context/shop-context';
import { PRODUCTS } from "./Products";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop products={PRODUCTS} />} /> 
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
