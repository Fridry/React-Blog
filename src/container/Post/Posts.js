import React, { useState, useEffect } from "react";
import RecentsPost from "../../components/RecentPosts/RecentsPost";

import Layout from "../../components/Layout/Layout";

import "./style.css";

import blogPosts from "../../data/posts.json";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const posts = blogPosts.data;

    setPosts(posts);
  }, [posts]);

  return (
    <Layout>
      {posts.map(post => {
        return <RecentsPost key={post.id} post={post} />;
      })}
    </Layout>
  );
};

export default Posts;
