import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsService from "../services/productsService";
import LoadingComponent from "../components/LoadingComponent";
import { Rating } from "@mui/material";
//icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  //1. zumi id
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    ProductsService.getSingleProduct(productId)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCurrentImage(id) {
    setCurrentImage(id);
  }

  return (
    <div className="px-5 my-4">
      {isLoading ? (
        <div className="container mx-auto flex-col md:flex-row items-start gap-5">
          {/* left side */}
          <div className="w-full md:w-[50%]">
            <img
              src={singleProduct.images[currentImage]}
              className="w-full h-[400px] object-contain border-2 border-mainYellow mt-5 "
              alt=""
            />
            <div className="flex items-center gap-5 flex-wrap">
              {" "}
              {singleProduct.images.map((el, i) => {
                return (
                  <img
                    className="w-[100px] h-[100px] object-contain border-2 border-mainBlue mt-4"
                    onClick={() => handleCurrentImage(i)}
                    src={el}
                    key={i}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col gap-2">
            <h2 className="font-extrabold text-2xl text-mainBlue">{singleProduct.title}</h2>
            <span className="text-blueTextColor text-[20px]">${singleProduct.price}</span>
            <p className="flex items-center gap-2">
              <span>Reviews:</span>
              <Rating
                name="half-rating-read"
                defaultValue={singleProduct.rating}
                precision={0.5}
                readOnly
              />
            </p>
            <p className="flex items-center gap-2">
              Avalibility:
               {singleProduct.stock?<span className="flex items-center gap-2 text-lightGreen"> <FaCheck /> In Stock</span>:<span className="flex items-center gap-2 text-mainRed"><ImCross/> Out Of Stock</span>}
            </p>
            <p>Hurry up! Only <span className="font-bold"> {singleProduct.stock}</span> product left in stock!</p>
            <p>Total: <price:span className='text-blueTextColor text-[20px] font-bold'>${singleProduct.price}</price:span></p>
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}

export default SingleProductPage;
