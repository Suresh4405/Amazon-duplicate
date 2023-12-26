import { configureStore } from "@reduxjs/toolkit";
import Cardcompslice from "./slice/Cardcompslice";


export  const store= configureStore({
    reducer:{
        your:Cardcompslice,
        
    }
})