import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addData } from "../actions/tableActions";

const AddData = ({ history }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    // Check For Errors
    if (title === "") {
      setErrors({ errors: { title: "Title is required" } });
      return;
    }

    if (body === "") {
      setErrors({ errors: { body: "BoDy is required" } });
      return;
    }

    dispatch(addData({ title, body }, history));
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
                    error={errors.name}
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
                    error={errors.name}
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
            value="Add Data"
            className="btn btn-success btn-block my-4"
          />
        </div>
      </form>
    </div>
  );
};

export default AddData;
