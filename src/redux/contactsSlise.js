import { fetchContacts, addContacts, deleteContacts } from "./ContactsOperations";
import { createSlice } from "@reduxjs/toolkit";


export const contactsReducer = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.isLoading = true;
            
        },
        [fetchContacts.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.items = payload; 
        },
        [fetchContacts.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        },
           [addContacts.pending]: (state) => {
            state.isLoading = true
        },
        [addContacts.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.items.push(payload); 
        },
        [addContacts.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        },
            [deleteContacts.pending]: (state) => {
            state.isLoading = true
        },
        [deleteContacts.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.isLoading = false
            state.items =  state.items.filter(({id}) => id !== payload)
        },
        [deleteContacts.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
     }
   } 
});
export default contactsReducer.reducer;
