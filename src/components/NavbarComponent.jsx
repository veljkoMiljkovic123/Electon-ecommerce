import React from "react";
import HeadingComponent from "./HeadingComponent";
import { Link } from "react-router-dom";
//logo
import logo from "../assets/logo.png";

//icons
import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import CategoryComponent from "./CategoryComponent";
import { useSelector } from "react-redux";

function NavbarComponent() {

  const totalProduct = useSelector(state=>state.cartStore.totalProduct)
  return (
    <div className=" ">
      <HeadingComponent />
      <nav className="bg-mainBlue h-full py-5 lg:h-[100px]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-3 h-full justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <img className="cursor-pointer" src={logo} alt="logo" />
          </Link>
          {/* Search bar */}
          <div className="bg-whiteTextColor rounded-[20px]">
            <input
              type="text"
              placeholder="Search product"
              className="bg-transparent outline-none px-[25px] py-[17px]"
            />
            <button className="bg-mainYellow text-whiteTextColor px-[25px] py-[17px] rounded-[20px]">
              Search
            </button>
          </div>
          {/* Links */}
          <div>
            <ul className="flex-center gap-5">
              <li className="flex-center">
                <CiUser color="white" size={25} />
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton
                    afterSignOutUrl="'/"
                    showName={true}
                    appearance={{
                      elements: {
                        avatarBox: "w-[40px] h-[40px]",
                      },
                      variables: {
                        colorText: "#f90",
                      },
                    }}
                  />
                </SignedIn>
              </li>
              <li className="flex-center gap-2">
                <CiHeart color="white" size={25} />
                <span className="badge">0</span>
                <Link to={"/"} className="text-whiteTextColor">
                  Favorite
                </Link>
              </li>
              <li className="flex-center gap-2">
                <CiShoppingCart color="white" size={25} />
                <span className="badge">{totalProduct}</span>
                <Link to={"/cart"} className="text-whiteTextColor">
                  Shoping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CategoryComponent />
    </div>
  );
}

export default NavbarComponent;
