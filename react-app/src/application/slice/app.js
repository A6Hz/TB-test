import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFiles } from "../../infrastructure/services/getFiles.service";

const initialState = {
  value: [],
  status: "idle",
};

export const fetchFilesAsync = createAsyncThunk(
  "file/fetch",
  async (amount) => {
    const list = await getFiles(amount);

    const parsedList = [];
    list.forEach((item) => {
      item.lines.forEach((line) => {
        parsedList.push({
          fileName: item.file,
          text: line.text,
          number: line.number,
          hex: line.hex,
        });
      });
    });

    return parsedList;
  }
);

export const filesSlice = createSlice({
  name: "file",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilesAsync.pending, (state) => {
        console.log("1");
        state.status = "loading";
        state.value = [];
      })
      .addCase(fetchFilesAsync.fulfilled, (state, action) => {
        console.log("2");
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const selectFileList = (state) => state.file.value;

export default filesSlice.reducer;
