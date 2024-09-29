import React from "react";
import HeadingComponent from "./HeadingComponent";
import { Link } from "react-router-dom";
//logo
import logo from "../assets/logo.png";

//icons
import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";

function NavbarComponent() {
  return (
    <div className=" ">
      <HeadingComponent />
      <nav className="bg-mainBlue h-[100px]">
        <div className="container mx-auto flex items-center h-full justify-between">
          {/* Logo */}
          <img src={logo} alt="logo" />
          {/* Search bar */}
          <div className="bg-whiteTextColor rounded-[20px]">
            <input
              type="text"
              placeholder="Search product"
              className="bg-transparent outline-none px-[25px] py-[17px]"
            />
            <button className="bg-mainYellow text-whiteTextColor px-[25px]  py-[17px] rounded-[20px]">
              Search
            </button>
          </div>
          {/* Links */}
          <div>
            <ul className="flex-center gap-5">
              <li className="flex-center">
                <CiUser color="white" size={25} />
                <Link to={"/"} className="text-whiteTextColor">SignIn</Link>
              </li>
              <li className="flex-center gap-2">
                <CiHeart color="white" size={25} />
                <span className="badge">0</span>
                <Link to={"/"} className="text-whiteTextColor">Favorite</Link>
              </li>
              <li className="flex-center gap-2">
                <CiShoppingCart color="white" size={25} />
                <span className="badge">0</span>
                <Link to={"/cart"} className="text-whiteTextColor">Shoping Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
