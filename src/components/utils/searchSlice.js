import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"searchCache",
    initialState:{
      cache:{}  
    },
    reducers:{
        setSearchCache(state, action){
            state.cache={...state.cache, ...action.payload}
        }
    }

})
export const {setSearchCache} = searchSlice.actions
export default searchSlice.reducer