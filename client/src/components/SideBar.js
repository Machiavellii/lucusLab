import React, {useState} from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [showBtn, setShowBtn] = useState(true)

  return (
    <>
     <div className="btn-holder">
     {showBtn ? <i className="fas fa-bars px-3" onClick={() => {
       setShowBtn(false)}}></i> : <i className="fas fa-times px-3" onClick={() => setShowBtn(true)}></i>}
      
      
    </div>
    <div className="wrapper">
    <div className={`${showBtn ? 'sidebar-wrapper' : 'sidebar-wrapper toggled'}`}>
        <ul className="sidebar-nav">
             <li className="list-group-item">
        <Link to="/" className="text-reset" onClick={() => {
       setShowBtn(true)}}>
          Home
        </Link>
      </li>
      <li className="list-group-item ">
        <Link to="/data-table" className="text-reset" onClick={() => {
       setShowBtn(true)}}>
          Data Table
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="/gallery" className="text-reset" onClick={() => {
       setShowBtn(true)}}>
          Gallery
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="/to-do-list" className="text-reset" onClick={() => {
       setShowBtn(true)}}>
          To Do List
        </Link>
      </li>
        </ul>
    </div>
</div>
    </>
  );
};

export default SideBar;
