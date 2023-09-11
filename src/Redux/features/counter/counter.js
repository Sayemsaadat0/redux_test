import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count : 10,
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducer : {

    }
})


export default counterSlice.reducer