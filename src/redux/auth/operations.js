import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
baseURL: "https://connections-api.goit.global/",
});
const setAuthAppBar = (token) => {
api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const registerThunk = createAsyncThunk(
"auth/register",
async (body, thunkAPI) => {
    try {
    console.log(body);

    const { data } = await api.post("/users/signup", body);
    setAuthAppBar(data.token);
    return data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    }
}
);
export const loginThunk = createAsyncThunk(
"auth/login",
async (body, thunkAPI) => {
    try {
    console.log(body);

    const { data } = await api.post("/users/login", body);
    setAuthAppBar(data.token);
    return data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    }
}
);
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
    await api.post("users/logout");
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
});
export const refreshUser = createAsyncThunk(
"auth/refresh",
async (_, thunkAPI) => {
    try {
    const savedToken = thunkAPI.getState().auth.token;
    console.log("Saved token:", savedToken);
    if (savedToken === null) {
        return thunkAPI.rejectWithValue("Token is not exist");
    }
    setAuthAppBar(savedToken);
    console.log("Token set in headers");
    const { data } = await api.get("users/current");
    return data;
    } catch (error) {
    console.error("Error:", error);
    return thunkAPI.rejectWithValue(error.message);
    }
}
);