import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
       list: [],
       id: 0
    },
    reducers: {
        setList(state, action) {
            state.list = action.payload;
            state.id = state.id += 1;
        }
    }
});

export const {
    setList
} = appSlice.actions;

export default appSlice.reducer;
