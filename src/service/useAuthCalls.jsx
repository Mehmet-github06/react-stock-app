import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {useNavigate} from "react-router-dom";

const useAuthCalls = () => {
  const navigate = useNavigate()
  const login = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userInfo
      );
      toastSuccessNotify("Login successful");
      console.log(data);
      navigate("/stock")
    } catch (error) {
      toastErrorNotify("login failed", error);
      console.log(error);
    }
  };

  return { login };
};

export default useAuthCalls;
