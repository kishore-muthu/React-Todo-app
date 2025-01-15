import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeather } from "../../Utils/api";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (city) => {
    const response = await fetchWeather(city);
    return response;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weather = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
