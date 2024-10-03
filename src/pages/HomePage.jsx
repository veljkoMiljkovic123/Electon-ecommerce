import React, { useEffect, useState } from "react";
import ProductsService from "../services/productsService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productsSlice";
import CardProductComponent from "../components/CardProductComponent";
import LoadingComponent from "../components/LoadingComponent";
import CategoryComponent from "../components/CategoryComponent";
import { motion } from "framer-motion";

//icons
import { CiCircleList } from "react-icons/ci";
import { MdGridView } from "react-icons/md";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { allProducts, currentCategory } = useSelector(
    (state) => state.productsStore);

    const [activeView,setActiveView] = useState('gridView')

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentCategory === "allProducts") {
      ProductsService.getAllProducts()
        .then((res) => dispatch(saveAllProductsAction(res.data.products)))
        .catch((err) => console.log(err));
    } else {
      //dispatch
      ProductsService.getAllProductsByCategory(currentCategory)
        .then((res) => dispatch(saveAllProductsAction(res.data.products)))
        .catch((err) => console.log(err));
    }
  }, [currentCategory]);

  return (
    <main className="container mx-auto">
      {/* grid/list view */}
      <div className="flex justify-end mt-5 mr-5 gap-3">
        <button className={activeView==='listView'?'bg-mainBlue p-1 rouded-[10px] text-whiteTextColor':'' } ><CiCircleList onClick={() => setActiveView('listView')} size={30}/></button>
        <button className={activeView==='gridView'?'bg-mainBlue p-1 rouded-[10px] text-whiteTextColor':'' }><MdGridView onClick={() => setActiveView('gridView')} size={30}/></button>
      </div>
      {/* Our products */}
      <motion.div 
      
      className={activeView==='listView'?"grid grid-cols-1 gap-5":"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 2xl:grid-cols-4 place-items-center"}>
        {allProducts.map((product) => {
          return <CardProductComponent activeView={activeView} key={product.id} product={product} />;
        })}
      </motion.div>
    </main>
  );
}

export default HomePage;
