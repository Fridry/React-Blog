import React from "react";
import SideImageHome from "../SideImageHome/SideImageHome";

const PostsGallery = ({ largeWidth, smallWidth, imgArray }) => {
  const BigImgSize = 450;

  const bigImgWrapper = {
    height: BigImgSize,
    overflow: "hidden"
  };
  const SmallImgWrapper = {
    height: BigImgSize / 3,
    overflow: "hidden"
  };

  return (
    <div className="galleryPost">
      <section style={{ width: largeWidth }} className="centerImgWrapper">
        <SideImageHome
          ImgWrapper={bigImgWrapper}
          src={require("../../assets/postImages/" + imgArray[1])}
        />
      </section>
      <section style={{ width: smallWidth }} className="sideImgWrapper">
        <SideImageHome
          ImgWrapper={SmallImgWrapper}
          src={require("../../assets/postImages/" + imgArray[2])}
        />
        <SideImageHome
          ImgWrapper={SmallImgWrapper}
          src={require("../../assets/postImages/" + imgArray[3])}
        />
        <SideImageHome
          ImgWrapper={SmallImgWrapper}
          src={require("../../assets/postImages/" + imgArray[4])}
        />
      </section>
    </div>
  );
};

export default PostsGallery;
