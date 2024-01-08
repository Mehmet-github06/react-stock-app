import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login successful");
      console.log(data);
      navigate("/stock");

      
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("login failed", error);
      console.log(error);
    }
  };

  return { login };
};

export default useAuthCalls;
