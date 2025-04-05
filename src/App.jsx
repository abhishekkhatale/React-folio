import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import DevSkills from "./components/DevSkills";
import DesignerSkills from "./components/DesignerSkills";
import EducationSection from "./components/EducationSection";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return <div className="w-full  text-white bg-zinc-900 ">
    <Navbar/>
    <Work/>
    <Stripes/>
    <Products/>
    <DevSkills/>
    <DesignerSkills/>
    <EducationSection/>
    <About/>
    <Footer/>
    </div>;
}

export default App;
