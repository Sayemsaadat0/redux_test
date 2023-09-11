import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counter"

const store = configureStore({
    reducer : {counterSlice}
})

export default store