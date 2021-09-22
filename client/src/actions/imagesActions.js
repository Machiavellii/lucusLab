import { GET_IMAGES } from "../constants/imagesConstants";
import axios from "axios";

export const getImages = () => async (dispatch) => {
  const res = await axios.get("/api/photos");

  // console.log(res.data);

  dispatch({
    type: GET_IMAGES,
    payload: res.data,
  });
};
