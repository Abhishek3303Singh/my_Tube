import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name:"nav",
    initialState:{
        isSidebarOpen:true
    },
    reducers:{
        toggle:(state)=>{
state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})
export const {toggle} = navSlice.actions
export default navSlice.reducer