import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import VideosDataSlice from "./videosDataSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
reducer:{
    nav : navSlice,
    videos:VideosDataSlice,
    searchCache:searchSlice,
    chats:chatSlice
}
})

export default store;