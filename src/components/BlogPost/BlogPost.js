import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";

import blogPosts from "../../data/posts.json";

import "./style.css";

const BlogPost = props => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: ""
  });

  const postId = props.match.params.postId;

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const post = blogPosts.data.find(post => post.id == postId);

    setPost(post);
  }, [post, postId]);

  if (post.blogImage === "") return null;

  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">
            Posted on {post.postedOn} by {post.author}
          </span>
        </div>

        <div className="postImageContainer">
          <img
            src={require("../../assets/postImages/" + post.blogImage)}
            alt="Post Ilustration"
          />
        </div>

        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
