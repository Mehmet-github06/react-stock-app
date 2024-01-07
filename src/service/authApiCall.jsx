import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

export const login = async (userInfo) => {
  try {
    const { data } = await axios.post(
       `${process.env.REACT_APP_BASE_URL}/auth/login`,
      userInfo
    )
    toastSuccessNotify("Login successful")
    console.log(data);
  } catch (error) {
    toastErrorNotify("login failed", error)
    console.log(error);
  }
};
