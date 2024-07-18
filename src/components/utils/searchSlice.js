import { createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
    SUCCESS:"idle",
    LOADING:"loading",
    ERROR:"error"
})

const searchSlice=createSlice({
    name:"searchCache",
    initialState:{
      cache:{},
      searchData:[],
      status:STATUSES.SUCCESS  
    },
    reducers:{
        setSearchCache(state, action){
            state.cache={...state.cache, ...action.payload}
        },
        setSearchData(state,action){
            state.searchData=action.payload
        },
        setStatus(state,action){
            state.status=action.payload

        }
    }

})
export const {setSearchCache,setSearchData,setStatus} = searchSlice.actions
export default searchSlice.reducer


//Thunk

export function getSearchVideos(saerchText){
    return async function getSearchVideosThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING))

        const link="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+saerchText.toUpperCase()+"&type=video&key=AIzaSyA6J0O0mhNTex2AjbKbHMSpzVou9gwti4s"

        try{
            const data=await fetch(link)
            
            const jsonSearchData=await data.json()

            dispatch(setSearchData(jsonSearchData.items))
            dispatch(setStatus(STATUSES.SUCCESS))
            
            

        }
        catch(e){
            console.log(e)
            dispatch(setStatus(STATUSES.ERROR))
        }

    } 
} 