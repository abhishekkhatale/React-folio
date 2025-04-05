import React from "react";
import Product from "./Product";

function Products() {
  const projectdata = [
    {
      title: "Eat Ai",
      description: "EatAi is a smart AI-powered nutrition tracking app designed to simplify diet and health management. It features an AI food scanner for instant calorie detection, a receipt scanning tool to track restaurant meals, and a smart recipe generator that suggests meals based on available ingredients.",
      url: "p1.png",
      link: "https://www.figma.com/design/EWzwvDSasxImtiv31lNCiv/EatAI?node-id=1-2&t=kUdcvWg0gHMJfEIi-1"
    },
    {
      title: "Charmer",
      description: "Charmer is an AI-powered dating assistant designed to help users navigate conversations on dating apps like Tinder, Bumble, Hinge, and Instagram. It provides real-time chat suggestions, conversation analysis, profile enhancements, and gamified insights, helping users maintain engaging interactions and build meaningful connections.",
      url: "p2.jpeg",
      link: "https://www.figma.com/design/F7T4ObVyyU5G3Wyo0dsruN/Charmer--Void-Aethers-?node-id=0-1&t=K1ItqS8Umo5se7Xs-1"
    },
    {
      title: "React E-commerce ",
      description: "A React-based e-commerce web application with complete CRUD functionality and API integration. Users can view, add, edit, and delete products, as well as filter them by categories for a seamless shopping experience.",
      url: "p3.png",
      link: "https://github.com/abhishekkhatale/Ecommerce"
    },
    {
      title: "React blogging",
      description: "A fullstack blogging platform where users can view and post blogs. Deletion privileges are handled by a designated “Oldy Admin.” The application integrates a functional backend for smooth blog management and dynamic content handling.",
      url: "p4.png",
      link: "https://github.com/abhishekkhatale/Blogingwebsite"
    },
  ];
  
  return (
    <div>
      {projectdata.map((elem, i) => (
        <Product key={i} data={elem} index={i} />
      ))}
    </div>
  );
}

export default Products;