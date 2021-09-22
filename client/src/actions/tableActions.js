import {
  GET_DATAS,
  DELETE_DATA,
  ADD_DATA,
  GET_DATA,
  UPDATE_DATA,
} from "../constants/dataConstants";
import axios from "axios";

export const getDatas = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  dispatch({
    type: GET_DATAS,
    payload: res.data,
  });
};

export const getData = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  dispatch({
    type: GET_DATA,
    payload: res.data,
  });
};

export const addData = (data, history) => async (dispatch) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    data
  );

  dispatch({
    type: ADD_DATA,
    payload: res.data,
  });
  history.push("/data-table");
};

export const deleteData = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

  dispatch({
    type: DELETE_DATA,
    payload: id,
  });
};

export const updateData = (data, history) => async (dispatch) => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${data.id}`,
    data
  );

  dispatch({
    type: UPDATE_DATA,
    payload: res.data,
  });

  history.push("/data-table");
};

export const filteredData = (data) => async (dispatch) => {
  console.log(data);
};
