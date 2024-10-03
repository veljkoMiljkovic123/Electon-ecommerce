import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsService from "../services/productsService";
import LoadingComponent from "../components/LoadingComponent";
import { CiHeart } from "react-icons/ci";
import { Rating } from "@mui/material";
//icons
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { saveInCartAction } from "../store/cartSlice";
import { saveFavoriteAction } from "../store/favoriteSlice";

function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [favoriteIdIcon,setFavoriteIdIcon] = useState(null)
  //1. zumi id
  const { productId } = useParams();
  const dispach = useDispatch()
 
  const {allFavorite} = useSelector(state=>state.favoriteStore)

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

  function handleAddToCart(){
    dispach(saveInCartAction(singleProduct))
  }
  function handleAddFAvorite(){
    dispach(saveFavoriteAction(singleProduct))
  }

  useEffect(()=>{
    allFavorite.find((item)=>{
      if(item.id===parseInt(productId)){
        setFavoriteIdIcon(item.id)
        return
      }
    })
  },[allFavorite])

  return (
    <div className="px-5 my-4">
      {isLoading ? (
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-5">
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
            <p>Total price: <span className='text-blueTextColor text-[20px] font-bold'>${singleProduct.price}</span></p>

            {/* ADD / Favorite Button */}
            <div className="flex items-center mt-12 gap-5">
              <Link onClick={handleAddToCart} to={'/cart'} className="bg-mainYellow text-white px-6 py-3 rounded-lg text-[20px]">Add to Cart</Link>
              <Link to={'/favorite'} className="bg-lightBlue px-6 p-3 rounded-lg border border-blackTextColor" onClick={handleAddFAvorite}>

              {favoriteIdIcon === parseInt(productId)?<CiHeart size={30} color="red"/>:<CiHeart size={30}/>}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}

export default SingleProductPage;
