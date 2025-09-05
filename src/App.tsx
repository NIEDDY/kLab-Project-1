import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHandling from "./LayoutForder/Layout";
import EcommerceHero from "./components/Ecommerce";
import Contact from "./components/Contact";
import  BlogApp from "./components/Blog";

import ProductCard from "./components/product";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHandling />}>
          <Route index element={<EcommerceHero />} />
          <Route path="/home" element={<EcommerceHero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<ProductCard/>}/>
          <Route path="/blog" element={<BlogApp/>}/>
          
          {/* Add more routes as needed */}
          
        </Route>
      </Routes>

   
    </BrowserRouter>
  );
}

export default App;