import {
  GET_DATAS,
  DELETE_DATA,
  ADD_DATA,
  GET_DATA,
  UPDATE_DATA,
} from "../constants/dataConstants";

const initialState = {
  datas: [],
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        datas: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_DATA:
      return {
        ...state,
        datas: state.datas.filter((data) => data.id !== action.payload),
      };
    case ADD_DATA:
      return {
        ...state,
        datas: [action.payload, ...state.datas],
      };
    case UPDATE_DATA:
      return {
        ...state,
        datas: state.datas.map((data) =>
          data.id === action.payload.id ? (data = action.payload) : data
        ),
      };

    default:
      return state;
  }
}
