import React from "react";
import {image1,image2,image3} from "../../assets/images";
const ImageComponent = (props) => {
  return (
    <img
      src={getImage(props.src)}
      alt={props.alt}
      style={{ objectFit: "cover", height: "45vh", width: "100%" }}></img>
  );
};

const getImage = (src) => {
  switch(src) {
    case "image1":
      return image1;
    case "image2":
      return image2;
    case "image3":
      return image3;
    default:
      return image1;
  }
};
export default ImageComponent;
