import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name:'favorite',
    initialState:{
      allFavorite:[],
      favoriteTotal:0
    },
    reducers:{
        saveFavoriteAction:(state,action)=>{
            let coppyArray = [...state.allFavorite]

            let findIndex = null;

            coppyArray.find((item,index)=>{
                if(item.id === action.payload.id){
                    findIndex=index
                    return
                }
            })
            if(findIndex === null){
                coppyArray.push(action.payload)
                state.favoriteTotal++;
            }else{
                coppyArray.splice(findIndex,1)
                state.favoriteTotal--;
            }
            state.allFavorite = coppyArray
        }
    }
})

export const {saveFavoriteAction} = favoriteSlice.actions
export default favoriteSlice.reducer