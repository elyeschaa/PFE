import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const register = (user) => async (dispatch) => {
  try {
    await axios
      .post("/api/user/register", user)
      .then((res) => {
        toast.success("Successfully registerd");
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("Invalid");
        console.log(err);
      });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
export const login = (payload) => async (dispatch) => {
  try {
    await axios
      .post("/api/user/login", payload.newUser)
      .then((res) => {
        console.log(res.data, "omaaaaaaaaaaaaar is here");
        localStorage.setItem("token", res.data.token);
        payload.history.push("/");
        payload.history.go(0);
        toast.success("Welcome Back");
      })
      .catch((err) => {
        toast.error("Invalid Credentials");
        console.log(err);
      });
  } catch (error) {
    if (error) {
      toast.error("Invalid Credentials");
      console.log(error);
    }
  }
};
