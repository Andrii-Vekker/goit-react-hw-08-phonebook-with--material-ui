import { createSlice } from "@reduxjs/toolkit";

export const filterSlise = createSlice({
    name: "filter",
    initialState: { filter: "" },
    reducers: {
        filteredContacts(state, action) {
  state.filter = action.payload
        }
    }
});
export const {filteredContacts} = filterSlise.actions