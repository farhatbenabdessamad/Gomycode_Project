import {
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  GET_PROJECTS,
  PROJECTS_LOADING,
  PROJECTS_ERROR,
  GET_PROJECT,
  GET_MYPROJECTS,
} from '../actionType/actionTypeProject'; // Assurez-vous que le chemin est correct

const initialState = {
  projects: [],
  loading: false,
  error: null,
  project:{},
  myprojects:[]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project._id === action.payload._id ? action.payload : project
        ),
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
      case GET_MYPROJECTS:
      return {
        ...state,
        myprojects: action.payload,
        loading: false,
      };
      case GET_PROJECT:
        return {
          ...state,
          project: action.payload,
          loading: false,
        };
    case PROJECTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PROJECTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default projectReducer;
