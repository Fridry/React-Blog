import React from "react";

const SideImageHome = ({ ImgWrapper, src }) => {
  return (
    <div style={ImgWrapper}>
      <img src={src} alt="" />
    </div>
  );
};

export default SideImageHome;
