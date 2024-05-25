import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: 'ui',
    initialState : { toggleInitialState : false },
    reducers : {
        toggle(state){
            state.toggleInitialState = !state.toggleInitialState
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;