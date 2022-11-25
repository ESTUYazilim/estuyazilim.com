import React from "react";

const ImageComponent = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ objectFit: "cover", height: "60vh", width: "100%" }}></img>
  );
};
export default ImageComponent;
