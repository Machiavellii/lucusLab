import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getImages } from "../actions/imagesActions";
import Spinner from "../components/Spinner";

const Gallery = () => {
  const [filteredImage, setFilteredImage] = useState([]);
  const text = useRef("");
  const dispatch = useDispatch();

  const { images, loading } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const onChange = (e) => {
    if (text.current.value !== "") {
      setFilteredImage("");
      images.filter((image) => {
        const matchImage =
          e.target.value.length >= 1 &&
          image.user.first_name
            .toUpperCase()
            .includes(e.target.value.toUpperCase()) &&
          image;
        setFilteredImage((filteredImage) => [...filteredImage, matchImage]);
        // console.log(matchImage);
      });
    } else {
      setFilteredImage("");
    }
  };

  return (
    <div className="container">
      <div className="row">
        {loading && <Spinner />}

        <input
          type="text"
          placeholder="Search by User First Name"
          className="form-control search-img"
          onChange={(e) => onChange(e)}
        />

        {filteredImage.filter(Boolean).length > 0
          ? filteredImage.filter(Boolean).map((image) => (
              <div key={image.id} className="col-sm-4 mb-5 img-holder">
                {" "}
                <img src={image.urls.raw} alt="" className="gallery-img" />
                <span className="font-weight-bold">
                  {image.user.first_name}
                </span>
              </div>
            ))
          : images.map((image) => (
              <div key={image.id} className="col-sm-4 mb-5 img-holder">
                {" "}
                <img src={image.urls.raw} alt="" className="gallery-img" />
                <span className="font-weight-bold">
                  {image.user.first_name}
                </span>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Gallery;
