import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";
const chatSlice=createSlice({
    name:"chats",
    initialState:{
        msg:[]
    },
    reducers:{
        addChats(state,action){
            state.msg.splice(LIVE_CHAT_COUNT,1)
            state.msg.unshift(action.payload)

        }
    }
})
export const {addChats} = chatSlice.actions
export default chatSlice.reducer