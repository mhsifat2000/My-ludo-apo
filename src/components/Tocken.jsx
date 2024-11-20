import React from "react";

const Token = ({ color, position }) => {
  const styles = {
    position: "absolute",
    left: `${position.x}%`,
    top: `${position.y}%`,
    backgroundColor: color,
    borderRadius: "50%",
    width: "40px",
    height: "40px",
  };

  return <div style={styles}></div>;
};

export default Token;