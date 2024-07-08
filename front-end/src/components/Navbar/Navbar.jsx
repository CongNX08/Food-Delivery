import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <img className="w-36" src={assets.logo} alt="#" />
      <ul className="flex list-none gap-5 text-gray-600 text-base">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex items-center gap-10">
        <img className="" src={assets.search_icon} alt="#" />
        <div>
          <img className="" src={assets.basket_icon} alt="#" />
          <div></div>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
