import React from "react";
import logo from "../images/logo.png";
import humbarger from "../images/humbarger.png";
import user from "../images/user.png";
import bell from "../images/bell.png";
import { useDispatch } from "react-redux";
import { toggle } from "./utils/navSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggle());
  };
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleHandler()}
          className="h-9 cursor-pointer"
          alt="menu"
          src={humbarger}
        />
      
          <img
            className="h-9 mx-3 bg-white-100 cursor-pointer"
            alt="logo"
            src={logo}
          />
      
      </div>
      <div className="col-span-10 text-center">
        <input
          placeholder="search"
          className="w-1/2 border border-gray-600 p-2 rounded-l-full focus:outline-none"
          type="text"
        />
        <button className="border border-gray-500 py-2 px-3 bg-gray-200 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="flex col-span-1">
      <img className="h-9 mx-3" alt="notification" src={bell} />
        <img className="h-8" alt="user" src={user} />
        
      </div>
    </div>
  );
};

export default Header;
