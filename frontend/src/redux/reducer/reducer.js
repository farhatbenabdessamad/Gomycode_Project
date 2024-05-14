import { GETCURRENT, LOGIN, LOGOUT, REGISTER } from "../actionType/actionType"

const initialState = {
    user:{},
    msg:"",
    loading: true
}

export const reduceruser = (state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
   localStorage.setItem("token",payload.token)
  return { ...state, user:payload.user,msg:payload.msg }

  case LOGIN:
   localStorage.setItem("token",payload.token)
  return { ...state, user:payload.user,msg:payload.msg }
case GETCURRENT:
  return{...state, user:payload.user, loading:false}
  case LOGOUT: 
  localStorage.removeItem("token")
  return{...state, user:{}}
  default:
    return state
  }

}
