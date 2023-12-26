import { createSlice } from "@reduxjs/toolkit";


const Cardcompslice=createSlice({
    name:"Cardcomp",
    initialState:{
        count:0
    },

    reducers:{
        increment:(state)=>{
            state.count +=1
        },
        decrement:(state)=>{
            state.count -=1
        }
    }

})

export default Cardcompslice.reducer
export const Action= Cardcompslice.actions