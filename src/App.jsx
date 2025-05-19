import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={About} />
        <Route path='/products' Component={ProductsPage} />
        <Route path='/products/:id' Component={SingleProduct} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
