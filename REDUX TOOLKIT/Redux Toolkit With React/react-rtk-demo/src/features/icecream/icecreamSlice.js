// const { cakeActions } = require('../cake/cakeSlice');
import {createSlice} from '@reduxjs/toolkit';

// const createSlice = require('@reduxjs/toolkit').createSlice;
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, actions) => {
            state.numOfIcecreams += actions.payload
        },
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams--
    //     }
    // }
    extraReducers:(builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecreams--
        })
    }
});

export default icecreamSlice.reducer;
// module.exports.icecreamActions = icecreamSlice.actions;
export const {ordered, restocked} = icecreamSlice.actions; 