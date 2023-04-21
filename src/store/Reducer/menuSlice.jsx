import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getMenu } from "../api/menuApi";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

// export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
//   const response = await getMenu();
//   return response.data;
// });

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
