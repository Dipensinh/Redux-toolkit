import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/Userslice";

const Store = configureStore({
    reducer:{
        users : UserSlice
    }
})
export default Store;