import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Topbar from "../components/Topbar";
import BlogPost from "../components/Blog";

import ProductCard from "../components/product";
import BestSellingProducts from "../components/sellingproduct";

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
         
            <Footer />

        </div>
    );
};

export default LayoutHandling;
