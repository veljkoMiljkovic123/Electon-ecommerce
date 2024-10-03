import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CardProductComponent({ product,activeView }) {
  console.log(product);

  return (
    <motion.div
    whileHover={{scale:1.05}}
    className={activeView==='listView'?'w-full flex items-center border-b pb-2 border-mainBlue justify-between':'w-[250px] h-full border border-mainBlue rounded-lg flex flex-col items-center gap-3 pb-3 pt-2'}>
      
        <img
          src={product.thumbnail}
          alt={product.title}
          className={activeView==='listView'?'w-[100px] h-[100px] object-cover':'w-full h-[200px] object-cover'}
        />
      
     
      <h2 className="font-extrabold text-xl text-mainBlue">
        {product.title.substring(0, 13)}
      </h2>
      <span className="text-mainYellow font-bold">${product.price}</span>
      {/* raiting */}
      <div className="hidden lg:block">
      <Rating
        name="half-rating-read"
        defaultValue={product.rating}
        precision={0.5}
        readOnly
        
      />
      </div>
      <Link
        to={`/singleProducts/${product.id}`}
        className="bg-mainBlue px-4 py-2 text-whiteTextColor rounded-lg hover:bg-mainYellow transition-all duration-200"
      >
        View Detail
      </Link>
    </motion.div>
  );
}

export default CardProductComponent;
