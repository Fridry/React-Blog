import React from "react";

import BlogPost from "../../components/BlogPost/BlogPost";
import Layout from "../../components/Layout/Layout";

import "./style.css";

const Post = props => {
  return (
    <Layout>
      <BlogPost {...props} />
    </Layout>
  );
};

export default Post;
