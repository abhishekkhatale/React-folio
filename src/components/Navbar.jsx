import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-lg mx-auto py-10 flex items-center justify-between">
      <div className="flex gap-20 items-center">
      <div className="flex gap-2 items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
        <img src="foilo.png" alt="" className="h-auto w-5" />
        <h1 className="font-semibold">Abhishek Khatale</h1>
      </div>
      <div className="flex gap-10 items-center">
        <a href="" className="hover:text-white text-sm text-zinc-200">
          Home
        </a>
        <a
          href=""
          className="hover:text-white text-sm text-zinc-200 drop-shadow-[0_0_50px_rgba(44,255,32,1)] flex items-center gap-1"
        //   style={{
        //     boxShadow: "1px 1px 67px -2px rgba(20, 255, 40, 1)",
        //     MozBoxShadow: "1px 1px 67px -2px rgba(20, 255, 40, 1)",
        //   }}
        >
          <span className="block h-1 w-1 rounded bg-green-400 " />
          Projects
        </a>
        <a href="" className="hover:text-white text-sm text-zinc-200">
          About
        </a>
      </div>
      </div>
      
      <Button title="Github" link="https://github.com/abhishekkhatale"/>
    </div>
  );
}

export default Navbar;
