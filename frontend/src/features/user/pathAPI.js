import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const updateProfile = createAsyncThunk("userDetails", async (user) => {
  const token = localStorage.getItem("accessToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await Axios.put(
    "http://localhost:8000/v1/user/profile",
    { user },
    config
  );
  console.log(data.user);
  return data.user;
});
