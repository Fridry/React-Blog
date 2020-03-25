import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card/Card";

import AboutPic from "../../assets/profile/profile1.jpg";

import blogPosts from "../../data/posts.json";

import "./style.css";

const Sidebar = (props, isPost) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const posts = blogPosts.data;

    setPosts(posts);
  }, [posts]);

  let routeOpt = props.routeOption;

  if (routeOpt === undefined) routeOpt = "";

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
          <div className="socialMedia">
            <a href="https://twitter.com">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="https://www.pinterest.com/">
              <i className="fab fa-pinterest-square"></i>
            </a>
            <a href="https://www.tumblr.com/">
              <i className="fab fa-tumblr-square"></i>
            </a>
            <a href="https://web.whatsapp.com/">
              <i className="fab fa-whatsapp-square"></i>
            </a>
            <a href="https://github.com/">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="https://wwww.linkedin.com/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
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
              <div className="recentPost" key={post.id}>
                <Link
                  to={`${routeOpt}${post.id}`}
                  style={{ textDecoration: "none" }}
                >
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
