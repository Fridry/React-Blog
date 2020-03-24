import React from "react";

import "./style.css";

import BlogPost from "../../components/BlogPost/BlogPost";
import Sidebar from "../../components/Sidebar/Sidebar";

const Post = () => {
  return (
    <section className="container">
      <BlogPost />
      <Sidebar />
    </section>
  );
};

export default Post;
