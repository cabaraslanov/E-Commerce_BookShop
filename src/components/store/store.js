import { configureStore } from "@reduxjs/toolkit";
import feature from "./feature";

export default configureStore({
    reducer:{
        bookData:feature
    }
})