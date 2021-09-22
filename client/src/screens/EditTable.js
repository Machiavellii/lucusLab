import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateData, getData } from "../actions/tableActions";
import Spinner from "../components/Spinner";
import { DATA_UPDATE_RESET } from "../constants/dataConstants";

const EditTable = ({ match, history }) => {
  const { id } = match.params;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getData(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (data && data.title) {
      setTitle(data.title);
      setBody(data.body);
    }
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
    const { id, userId } = data;
    dispatch(updateData({ id, userId, title, body }, history));
  };

  return (
    <div className="col-md-8 m-auto">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="card bg-white py-2 px-4">
              <div className="card-body">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Body</label>
                  <input
                    type="text"
                    name="body"
                    className="form-control"
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Edit Data"
            className="btn btn-success btn-block my-4"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTable;
