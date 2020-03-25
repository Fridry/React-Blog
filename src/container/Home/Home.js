import React, { useState, useEffect } from "react";

import Card from "../../components/UI/Card/Card";

import RecentsPost from "../../components/RecentPosts/RecentsPost";
import PostsGallery from "../../components/PostsGallery/PostsGallery";

import Layout from "../../components/Layout/Layout";

import "./style.css";

import blogPosts from "../../data/posts.json";

const Home = () => {
  const imgArray = blogPosts.data.map(post => post.blogImage);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const posts = blogPosts.data;

    setPosts(posts);
  }, [posts]);

  return (
    <div>
      <Card>
        <PostsGallery
          largeWidth={"70%"}
          smallWidth={"30%"}
          imgArray={imgArray}
        />
      </Card>

      <Layout>
        {posts.map(post => {
          return <RecentsPost key={post.id} post={post} />;
        })}
      </Layout>
    </div>
  );
};

export default Home;
