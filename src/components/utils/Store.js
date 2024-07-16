import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import VideosDataSlice from "./videosDataSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
reducer:{
    nav : navSlice,
    videos:VideosDataSlice,
    searchCache:searchSlice
}
})

export default store;