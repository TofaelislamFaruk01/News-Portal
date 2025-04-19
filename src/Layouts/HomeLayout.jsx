import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavBar from "../Components/layout-component/LeftNavBar";
import RightNavBar from "../Components/layout-component/RightNavBar";
import Navbar from "../Components/Navbar";


const HomeLayout = () => {
    return (
        <div>

           
            <header>
                <Header/>
                <section className="w-11/12 mx-auto">
                    <LatestNews/>
                </section>
               
            </header>
            <nav className="w-11/12 mx-auto py-2">
            <Navbar/>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">

            <aside className="col-span-3">

                 <LeftNavBar/>
                 
                 </aside>
            <section className="col-span-6 h-[85vh] overflow-y-auto ">
                <Outlet/>
            </section>
            <aside className="col-span-3">
                <RightNavBar/>
            </aside>
            
            </main>
            
        </div>
    );
};

export default HomeLayout;