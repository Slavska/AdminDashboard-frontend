import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (errorCode) => {
  let errorMessage = "An unexpected error occurred. Please try again.";

  if (errorCode === 400) {
    errorMessage = "Bad request. Please check your input.";
  } else if (errorCode === 401) {
    errorMessage = "Email or password invalid. Please check your credentials.";
  } else if (errorCode === 404) {
    errorMessage =
      "Service not found. The requested resource could not be located.";
  } else if (errorCode === 409) {
    errorMessage = "Such email already exists. Please use a different email.";
  } else if (errorCode === 500) {
    errorMessage =
      "Server error. Something went wrong on our end. Please try again later.";
  }

  toast.error(errorMessage, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
  });
};

export const instance = axios.create({
  baseURL: "https://admin-dashboards-backend.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post("user/signup", credentials);
      if (res.status === 201) {
        // const { email, password } = credentials;
        // const { data } = await instance.post("/user/login", {
        //   email,
        //   password,
        // });
        // console.log(data);
        // setToken(data.token);
        toast.success("Welcome!");
        return credentials;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post("/user/login", credentials);
      setToken(data.token);
      localStorage.setItem("refreshToken", data.token);
      localStorage.setItem("accessToken", data.token);
      toast.success("Welcome!");
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/user/logout");
      localStorage.clear("refreshToken");
      localStorage.clear("accessToken");
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setToken(accessToken);
      const { data } = await instance.get("user/user-info");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default instance;
