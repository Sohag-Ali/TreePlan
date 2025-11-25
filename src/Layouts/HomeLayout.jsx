
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import { useEffect } from "react";
import Aos from "aos";
import { Outlet } from "react-router";


 


const HomeLayout = () => {
     useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: false,     // animate only once
      offset: 50,     // offset (px) from top to trigger
    });
    }, []);
    return (
        <div className="min-h-screen flex flex-col bg-base-100">
            {/* Header */}
            <header>
                <div className="max-w-[1340px] mx-auto px-4">
                    <nav >
                        <Navbar></Navbar>
                    </nav>
                    <div className='my-3' data-aos='zoom-in' data-aos-delay="200" >
                       <Banner></Banner>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full">
                <div className="max-w-[1340px] mx-auto px-4 py-8">
                    <Outlet></Outlet>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full mt-auto">
                <div className="max-w-[1340px] mx-auto px-4 py-6">
                <Footer></Footer>
                </div>
            </footer>
        </div>
    );
};

export default HomeLayout;