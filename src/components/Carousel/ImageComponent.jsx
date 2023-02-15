import React from "react";

const ImageComponent = (props) => {
  var image = require("../../" + props.src);
  return (
    <img
      src={image}
      alt={props.alt}
      style={{ objectFit: "cover", height: "45vh", width: "100%" }}></img>
  );
};
export default ImageComponent;
