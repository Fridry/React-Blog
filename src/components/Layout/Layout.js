import React from "react";

import Sidebar from "../Sidebar/Sidebar";

import "./style.css";

const Layout = props => {
  return (
    <div>
      <div className="homeContainer">
        <section style={{ width: "70%" }}>{props.children}</section>
        <section style={{ width: "30%" }}>
          <Sidebar routeOption={"post/"} />
        </section>
      </div>
    </div>
  );
};

export default Layout;
