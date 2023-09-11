import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./features/counter/counter"

const store = configureStore({
    reducer : {counterslice}
})


export default store