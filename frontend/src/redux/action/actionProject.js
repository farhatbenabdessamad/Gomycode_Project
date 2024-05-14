import axios from "axios";
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  GET_PROJECTS,
  PROJECTS_LOADING,
  PROJECTS_ERROR,
  GET_PROJECT,
  GET_MYPROJECTS,
} from "../actionType/actionTypeProject";

export const addProject = (projectData) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/api/project/add", projectData);
    dispatch({
      type: ADD_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err)
    dispatch({
      type: PROJECTS_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8000/api/project/delete/${id}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: PROJECTS_ERROR,
      payload: err.response.data,
    });
  }
};

export const updateProject = (id, projectData) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:8000/api/project/update/${id}`, projectData);
    dispatch({
      type: UPDATE_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECTS_ERROR,
      payload: err.response.data,
    });
  }
};

export const getProjects = () => async (dispatch) => {
  try {
    dispatch(setProjectsLoading());
    const res = await axios.get("http://localhost:8000/api/project/get");
    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECTS_ERROR,
      payload: err.response.data,
    });
  }
};

export const getoneProject = (id) => async (dispatch) => {
  try {
    dispatch(setProjectsLoading());
    const res = await axios.get("http://localhost:8000/api/project/"+id);
    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECTS_ERROR,
      payload: err.response.data,
    });
  }
};

export const getmyProject = (data) => async (dispatch) => {
  try {
    dispatch(setProjectsLoading());
    var my=data.map(e=>e._id)
    const res = await axios.post("http://localhost:8000/api/project/MyProjects",{data:my} );
    dispatch({
      type: GET_MYPROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECTS_ERROR,
      payload: err.response.data,
    });
  }
};

export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING,
  };
};
