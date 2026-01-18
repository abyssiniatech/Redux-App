import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/Counter1slice";

export const store1 =configureStore({
    reducer:{
        counter: counterReducer,
    }
})