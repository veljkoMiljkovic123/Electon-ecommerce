import React from "react";

//icons
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

function HeadingComponent() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between gap-2 h-[90px]">
      <h3 className="text-blackTextColor">Need help? Call us: (+98) 0234 456 789</h3>
      <div className="flex items-center gap-4">
        <div className="flex gap-2 items-center">
          <CiLocationOn size={25}/>
          <span className="text-blackTextColor">Our store</span>
        </div>
        <div className="flex gap-2 items-center">
          <CiDeliveryTruck size={25}/>
          <span className="text-blackTextColor">Our store</span>
        </div>
      </div>
    </div>
  );
}

export default HeadingComponent;
