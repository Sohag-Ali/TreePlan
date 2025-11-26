
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import { useEffect } from "react";
import Aos from "aos";
import { Outlet, useNavigation } from "react-router";
import Loading from "../Components/Loading";


 


const HomeLayout = () => {
    const {state}= useNavigation();
     useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: false,     // animate only once
      offset: 50,     // offset (px) from top to trigger
    });
    }, []);
    return (
        <div className="min-h-screen flex flex-col bg-green-50">
            {/* Header */}
            <header>
                <div className="max-w-[1340px] mx-auto px-4">
                    <nav >
                        <Navbar></Navbar>
                    </nav>
                   
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full">
                <div className="max-w-[1340px] mx-auto px-4 py-8">
                    {state=="loading"? <Loading/> : <Outlet></Outlet> }
                 
                
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