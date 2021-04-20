import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
       lista: [],
       id: 0
    },
    reducers: {
        setLista(state, action) {
            state.lista = action.payload;
            state.id = state.id += 1;
        }
    }
});

export const {
    setLista
} = appSlice.actions;

export default appSlice.reducer;
