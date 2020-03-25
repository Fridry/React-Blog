import React from "react";
import { Link } from "react-router-dom";

import Card from "../../components/UI/Card/Card";

import "./style.css";

const RecentsPost = ({ post }) => {
  return (
    <div className="recentPostContainer">
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src={require("../../assets/postImages/" + post.blogImage)}
            alt="Post Ilustration"
          />
        </div>

        <div className="homeContentContainer">
          <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">
              Posted on {post.postedOn} by {post.author}
            </span>
          </div>
          <div className="postContent">
            <p>{post.blogText.substr(0, 500)}...</p>
          </div>
          <Link to={`post/${post.id}`}>
            <button className="readMoreBtn">Read More</button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RecentsPost;
