import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card/Card";

import AboutPic from "../../assets/profile/profile1.jpg";

import blogPosts from "../../data/posts.json";

import "./style.css";

const Sidebar = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const posts = blogPosts.data;

    setPosts(posts);
  }, [posts]);

  return (
    <div className="sidebarContainer">
      <Card
        style={{ marginBottom: "20px", padding: 20, boxSizing: "border-box" }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img src={AboutPic} alt="About" />
        </div>

        <div className="cardBody">
          <p className="textBio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            adipisci quibusdam aperiam aliquam doloremque vel quo fugiat
            nostrum. Commodi, facere eius quia cum incidunt consequatur natus
            voluptas mollitia reprehenderit totam?
          </p>
        </div>
      </Card>

      <Card
        style={{ marginBottom: "20px", padding: 20, boxSizing: "border-box" }}
      >
        <div className="cardHeader">
          <span>Social network</span>
        </div>
      </Card>

      <Card
        style={{ marginBottom: "20px", padding: 20, boxSizing: "border-box" }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {posts.map(post => {
            return (
              <div className="recentPost">
                <Link to={`${post.id}`} style={{ textDecoration: "none" }}>
                  <h3>{post.blogTitle}</h3>
                </Link>
                <span>{post.postedOn}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
