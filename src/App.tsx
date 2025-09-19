import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHandling from "./LayoutForder/Layout";
import EcommerceHero from "./components/Ecommerce";
import Contact from "./components/Contact";
import BlogPage from "./components/Blog";
import ProductCard from "./components/product";
import Elements from "./components/Element";
import BestSellingProducts from "./components/sellingproduct";
import ShopItem from "./components/shop";
import Product1 from "./components/freeshiping";
import Home from "./components/Home";
import KapeePage from "./components/Pages";
import LoginForm from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHandling />}>
          <Route index element={<EcommerceHero />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<ProductCard />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="elements" element={<Elements />} />
          <Route path="selling" element={<BestSellingProducts />} />
          <Route path="shop" element={<ShopItem />} />
          <Route path="freeshipping" element={<Product1 />} />
          <Route path="home" element={<Home />} />
          <Route path= "Pages"element={<KapeePage/>}/>
          <Route path="login"element={<LoginForm/>}/>
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
