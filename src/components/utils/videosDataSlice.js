// const {createSlice} = require('@reduxjs/toolkit')
import { createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
    SUCCESS:"idle",
    LOADING:"loading",
    ERROR:"error"
})

const videosDataSlice= createSlice({
    name:'videos',
    initialState:{
        videos:[],
        status:STATUSES.SUCCESS
    },
    reducers:{
        setVideos(state, action){
        state.videos = action.payload

        },
        setStatus(state, action){
            state.status = action.payload
        }
    }

})
export const {setVideos, setStatus} =videosDataSlice.actions;
export default videosDataSlice.reducer

// Thunk 

export function getAllVideos(YOUTUBE_VIDEOS_API){
   
    return async function getAllVideosThunk(dispatch, getState){
        
        dispatch(setStatus(STATUSES.LOADING))
        try{
            // console.log('keywordSlice', keyword)
            let link = YOUTUBE_VIDEOS_API
            
            const res = await fetch(link)
            const data = await res.json();
            // console.log("searchedData",data)
    
            dispatch(setVideos(data))
            dispatch(setStatus(STATUSES.SUCCESS))
        }
        catch(err){
            console.log(err)
            dispatch(setStatus(STATUSES.ERROR))

        }
    }
} 