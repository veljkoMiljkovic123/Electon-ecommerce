import React, { useEffect, useState } from "react";
import ProductsService from "../services/productsService";
import { useDispatch } from "react-redux";
import { setNewCategory } from "../store/productsSlice";

function CategoryComponent() {
  const [category, setCategory] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    ProductsService.getAllCategories()
      .then((res) => {
        setCategory(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCategory() {
    setIsActive(!isActive);
  }

  return (
    <div className="bg-[#f4f4f4] py-5">
      <div className="container mx-auto flex flex-col  lg:flex-row h-full items-center gap-8">
        <button
          onClick={handleCategory}
          className="bg-mainBlue text-whiteTextColor px-3 py-2 rounded-md cursor-pointer hover:bg-mainYellow transition-all duration-200"
        >
          {isActive ? "Hide Category" : "Show Category"}
        </button>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
          {isActive ? (
            <>
            <li onClick={() => {
                dispatch(setNewCategory('allProducts'))
                setIsActive(false)

            }} className="bg-mainBlue text-whiteTextColor px-4 py-2 w-[250px] text-center rounded-lg cursor-pointer hover:bg-mainYellow transition-all">All products</li>
              {category.map((cat, index) => {
                return (
                  <li
                    onClick={() => {
                        dispatch(setNewCategory(cat))
                        setIsActive(false)
                    }}
                    key={index}
                    className="bg-mainBlue text-whiteTextColor px-4 py-2 w-[250px] text-center rounded-lg cursor-pointer hover:bg-mainYellow transition-all"
                  >
                    {cat.name}
                  </li>
                );
              })}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default CategoryComponent;
