import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getreservation = createAsyncThunk("reservation/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:1996/reservation/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addreservation = createAsyncThunk("reservation/add", async (reservation) => {
  try {
    let result = axios.post("http://localhost:1996/reservation/add", reservation);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deletereservation = createAsyncThunk("reservation/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:1996/reservation/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editreservation = createAsyncThunk("reservation/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:1996/reservation/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  reservationList: null,
  status: null,
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: {
    [getreservation.pending]: (state) => {
      state.status = "pending";
    },
    [getreservation.fulfilled]: (state, action) => {
      state.status = "success";
      state.reservationList = action.payload.data.reservations;
    },
    [getreservation.rejected]: (state) => {
      state.status = "fail";
    },
    [addreservation.pending]: (state) => {
      state.status = "pending";
    },
    [addreservation.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addreservation.rejected]: (state) => {
      state.status = "fail";
    },
    [deletereservation.pending]: (state) => {
      state.status = "pending";
    },
    [deletereservation.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deletereservation.rejected]: (state) => {
      state.status = "fail";
    },
    [editreservation.pending]: (state) => {
      state.status = "pending";
    },
    [editreservation.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editreservation.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default reservationSlice.reducer;