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
import RegistrationForm from "./components/RegistrationForm";
import DashboardLayout from "./Dashboard Components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import Orders from "./components/dashboard/Orders";
import Reports from "./components/dashboard/Reports";
import Products from "./components/dashboard/Products";
import Categories from "./components/dashboard/Categories";
import Inventory from "./components/dashboard/Inventory";
import Customers from "./components/dashboard/Customers";
import UserManagement from "./components/dashboard/UserManagement";
// import Logs from "./components/dashboard/Logs";
import Integrations from "./components/dashboard/Integrations";
import Settings from "./components/dashboard/Settings";

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
          <Route path="Pages" element={<KapeePage/>} />
          <Route path="login" element={<LoginForm/>} />
          <Route path="register" element={<RegistrationForm/>} />

        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="reports" element={<Reports />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="customers" element={<Customers />} />
          <Route path="user-management" element={<UserManagement />} />
          {/* <Route path="logs" element={<Logs />} /> */}
          <Route path="integrations" element={<Integrations />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

