import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDatas, deleteData } from "../actions/tableActions";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const DataTable = ({ match }) => {
  const limit = match.params.limit || 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const text = useRef("");

  const dispatch = useDispatch();

  const { datas, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  // Get current posts
  const indexOfLastContent = currentPage * limit;
  const indexOfFirstContent = indexOfLastContent - limit;

  const currentContent = datas.slice(indexOfFirstContent, indexOfLastContent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onDeleteClick = (id) => {
    dispatch(deleteData(id));
  };

  const onChange = (e) => {
    if (text.current.value !== "") {
      setFilteredData("");
      datas.filter((data) => {
        const matchData = data.userId === Number(e.target.value) && data;
        setFilteredData((filteredData) => [...filteredData, matchData]);
      });
    } else {
      setFilteredData("");
    }
  };

  return (
    <div className="container">
      <div className="col-md-6 m-auto ">
        <input
          type="text"
          placeholder="Search by User ID"
          className="form-control"
          onChange={(e) => onChange(e)}
        />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col" className="th-w">
              User ID
            </th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col" className="th-w">
              <Link to="/add-data" className="link">
                <i className="fas fa-plus" /> Add
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading && <Spinner />}

          {filteredData.filter(Boolean).length > 0
            ? filteredData.filter(Boolean).map((data) => (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.userId}</td>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                  <td>
                    <Link to={`/еdit-table/${data.id}`}>
                      <i
                        className="fas fa-pencil-alt"
                        style={{
                          cursor: "pointer",
                          float: "right",
                          color: "black",
                          marginRight: "1rem",
                        }}
                      />
                    </Link>
                  </td>
                  <td>
                    <i
                      className="fas fa-times"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "red",
                      }}
                      onClick={() => onDeleteClick(data.id)}
                    />
                  </td>
                </tr>
              ))
            : currentContent.map((data) => (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.userId}</td>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                  <td>
                    <Link to={`/еdit-table/${data.id}`}>
                      <i
                        className="fas fa-pencil-alt"
                        style={{
                          cursor: "pointer",
                          float: "right",
                          color: "black",
                          marginRight: "1rem",
                        }}
                      />
                    </Link>
                  </td>
                  <td>
                    <i
                      className="fas fa-times"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "red",
                      }}
                      onClick={() => onDeleteClick(data.id)}
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      <Pagination
        contentsPerPage={limit}
        totalContent={datas.length}
        paginate={paginate}
      />
    </div>
  );
};

export default DataTable;
