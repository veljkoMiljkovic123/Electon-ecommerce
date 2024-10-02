import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalProduct: 0,
    totalPrice: 0,
  },
  reducers: {
    saveInCartAction: (state, action) => {
      console.log(action.payload);
      let copyArray = [...state.cart];
      //1. da li ga imamo u korpi
      let findIndex = null;

      //proveravam da li postoji u korpi
      copyArray.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      // dodaj novi proizvod ili uvecaj isti
      if (findIndex === null) {
        copyArray.push({...action.payload, count: 1,cartTotal:action.payload.price });
        state.totalProduct++;
        state.totalPrice+=action.payload.price
      }else{
        copyArray[findIndex].count+=1
      }
      //2. if statement

      state.cart = copyArray;
    },
    deleteItemCartAction: (state,action)=>{
        /*FIXME: uzmi index tamo gde mapujes
         const {index} = action.payload */
        let copyArray = [...state.cart];
        //1. da li ga imamo u korpi
        let findIndex = null;
  
        //proveravam da li postoji u korpi
        copyArray.find((item, index) => {
          if (item.id === action.payload.id) {
            findIndex = index;
            return;
          }
        });
        if(findIndex!==null){
            copyArray.splice(findIndex,1)
            state.totalProduct--;
            state.totalPrice = subTotal(copyArray)
        }



        state.cart = copyArray
    },
    setPriceHandler: (state,action)=>{
        const {increment, index} = action.payload 
        let copyArray = [...state.cart]
        
        copyArray[index].cartTotal += copyArray[index].price * increment

        state.totalPrice = subTotal(copyArray)
        if(copyArray[index].count === 1 && increment === -1){
            copyArray.splice(index,1)
            state.totalProduct--;
        }else{
            copyArray[index].count += increment
        }
    }
  }
    
});


//hendluj cartTotaal
function subTotal(arrayCart){
    return arrayCart.reduce((acc,current)=>{
        return acc + current.cartTotal
    },0)
}

export const { saveInCartAction,deleteItemCartAction,setPriceHandler } = cartSlice.actions;
export default cartSlice.reducer;
