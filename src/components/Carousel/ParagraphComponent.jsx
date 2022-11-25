import React from "react";
const ParagraphComponent = (props) => {
  return (
    <p
      style={{
        marginTop: 0,
        marginBottom: 0,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}>
      {props.children}
    </p>
  );
};
export default ParagraphComponent;
