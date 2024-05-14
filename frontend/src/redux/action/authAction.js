import axios from "axios";
import { REGISTER, LOGIN, LOGOUT, GETCURRENT } from "../actionType/actionType";
import { alert_error } from "./errorAction";

export const signupUser = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/user/register", data);
    dispatch({
      type: REGISTER,
      payload: res.data
    });
    if (navigate) {
      navigate("/");
    }
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data && error.response.data.errors) {
      error.response.data.errors.forEach(el => {
        dispatch(alert_error(el.msg));
      });
    } else {
      dispatch(alert_error("An error occurred"));
    }
  }
};

export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/user/login", data);
    dispatch({
      type: LOGIN,
      payload: res.data
    });
    if (navigate) {
      navigate("/");
    }
  } catch (error) {
    console.log(error);
    if (error.response && error.response.data && error.response.data.errors) {
      error.response.data.errors.forEach(el => {
        dispatch(alert_error(el.msg));
      });
    } else {
      dispatch(alert_error("An error occurred"));
    }
  }
};

export const getCurrentUser = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token")
    }
  };
  try {
    const res = await axios.get("http://localhost:8000/user/current", config);
    dispatch({
      type: GETCURRENT,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = (navigate) => async (dispatch) => {
  if (navigate) {
    navigate("/");
  }
  dispatch({
    type: LOGOUT
  });
};

export const updateUser = (id, data)=>async(dispatch)=>{
try {
  const res = await axios.put("http://localhost:8000/user/update/" + id, data);
  dispatch(getCurrentUser())
} catch (error) {
  console.log(error);
}
}