import React, { useEffect } from "react";
import ProductsService from "../services/productsService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productsSlice";
import CardProductComponent from "../components/CardProductComponent";

function HomePage() {
  const dispach = useDispatch();
  const { allProducts } = useSelector((state) => state.productsStore);
  console.log(allProducts);

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => {
        dispach(saveAllProductsAction(res.data.products));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="container mx-auto">
      {/* grid/list view */}
      {/* Our products */}
      <div className="flex flex-wrap items-center justify-center my-12 gap-8">
        {allProducts.map((product) => {
          return <CardProductComponent key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
}

export default HomePage;
