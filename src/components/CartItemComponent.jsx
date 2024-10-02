import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteItemCartAction } from "../store/cartSlice";

function CartItemComponent({ item }) {

    const dispatch = useDispatch()

    function removeItemHandler(){
        dispatch(deleteItemCartAction(item))
    }

  return (
    <div className="grid grid-cols-4 place-items-center mt-5 relative border-b-2 pb-2">
      <div className="flex gap-2 items-center ">
        {/* img */}
        <img
          className="border object-cover w-[100px] border-black hidden md:flex"
          src={item.thumbnail}
          alt=""
        />
        {/* property of product */}
        <div className="">
          <h2 className="text-[15px]">{item.title.substring(0, 10)}</h2>
          <p>{item.category}</p>
          <p>{item.stock}</p>
        </div>
      </div>
      <div>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center ">
        <button className="px-2 py-1 bg-slate-400">+</button>
        <span className="px-2 py-1 bg-slate-400">{item.count}</span>
        <button className="px-2 py-1 bg-slate-400">-</button>
      </div>
      <div>${item.cartTotal}</div>
      {/* remove */}
     
        <ImCross color="red" className="absolute top-0 right-0"onClick={removeItemHandler}/>
     
    </div>
  );
}

export default CartItemComponent;
