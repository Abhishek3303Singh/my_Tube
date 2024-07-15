import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggle: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSideMenu:(state)=>{
        state.isSidebarOpen=false
    }
  },
});
export const { toggle,closeSideMenu } = navSlice.actions;
export default navSlice.reducer;
