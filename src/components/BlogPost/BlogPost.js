import React from "react";
import Card from "../UI/Card/Card";

import PostImage from "../../assets/postImages/post1.jpg";

import "./style.css";

const BlogPost = () => {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Feature</span>
          <h1 className="postTitle">Post Title</h1>
          <span className="postedBy">
            Posted on March 21, 2020 by Frederick Edwski
          </span>
        </div>

        <div className="postImageContainer">
          <img src={PostImage} alt="Post Ilustration" />
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
