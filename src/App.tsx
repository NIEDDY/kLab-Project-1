import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHandling from "./LayoutForder/Layout";
import EcommerceHero from "./components/Ecommerce";
import Contact from "./components/Contact";
import BlogApp from "./components/Blog";
import ProductCard from "./components/product";
import Elements from "./components/Element";
import BestSellingProducts from "./components/sellingproduct";
import ShopItem from "./components/Shop";
import Product1 from "./components/freeshiping";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHandling />}>
          <Route index element={<EcommerceHero />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="blog" element={<BlogApp />} />
          <Route path="elements" element={<Elements />} />
          <Route path="selling" element={<BestSellingProducts />} />
          <Route path="shop" element={<ShopItem />} />
          <Route path="freeshipping" element={<Product1 />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
