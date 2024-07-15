import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import VideosDataSlice from "./videosDataSlice";

const store = configureStore({
reducer:{
    nav : navSlice,
    videos:VideosDataSlice
}
})

export default store;