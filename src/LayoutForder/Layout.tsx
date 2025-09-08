import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Topbar from "../components/Topbar";

import ProductCard from "../components/product";
import BestSellingProducts from "../components/sellingproduct";
import Product1 from "../components/freeshiping";
import Footer2 from "../components/footer2";




const LayoutHandling = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Topbar />
            
            <Navbar />
            <main className="flex-grow">
                <Outlet />
                
            </main>
            {/* Optionally include Contact here or in specific routes */}
            {/* <Contact /> */}
         <ProductCard/>
         <BestSellingProducts/>
            <Product1/>
             <Footer />
            <Footer2/>

        </div>
    );
};

export default LayoutHandling;
