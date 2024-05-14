import { ALERTERROR, CLEARERROR } from "../actionType/errorActionType"; // Assurez-vous que le chemin est correct

const initialState = []

export const error_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALERTERROR:
      return [ ...state, payload ]
    case CLEARERROR:
      return state.filter(e => e.id !== payload)
    default:
      return state
  }
}
