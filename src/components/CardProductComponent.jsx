import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
function CardProductComponent({ product }) {
  console.log(product);

  return (
    <div className="w-[250px] h-full border border-mainBlue rounded-lg flex flex-col items-center gap-3 pb-3 pt-2">
      
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-[200px] w-full object-contain rounded-t-lg hover:scale-110 transition-all duration-300"
        />
      
     
      <h2 className="font-extrabold text-xl text-mainBlue">
        {product.title.substring(0, 13)}
      </h2>
      <span className="text-mainYellow font-bold">${product.price}</span>
      {/* raiting */}
      <Rating
        name="half-rating-read"
        defaultValue={product.rating}
        precision={0.5}
        readOnly
      />
      <Link
        to={`/singleProducts/${product.id}`}
        className="bg-mainBlue px-4 py-2 text-whiteTextColor rounded-lg hover:bg-mainYellow transition-all duration-200"
      >
        View Detail
      </Link>
    </div>
  );
}

export default CardProductComponent;
