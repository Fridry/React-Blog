import React from "react";

import Card from "../../components/UI/Card/Card";

import Layout from "../../components/Layout/Layout";

import "./style.css";

const About = () => {
  return (
    <Layout>
      <Card>
        <div className="aboutHeader">
          <h1 className="aboutTitle">About Us</h1>
        </div>

        <div className="aboutContent">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            sequi doloremque neque consequatur rerum ipsam. Laboriosam
            architecto in quam, soluta ipsa autem quaerat. Nobis, eum quaerat.
            Debitis perferendis quaerat neque! A inventore quas expedita tenetur
            nisi incidunt tempora, eum odio, corrupti sapiente voluptatibus ipsa
            tempore quod obcaecati assumenda dolor. Sapiente quidem iste modi
            itaque voluptate assumenda corrupti molestias dolores blanditiis.
            <p>
              Blanditiis enim accusantium molestiae architecto sequi at hic
              aliquid, iure nihil earum pariatur. Officia fuga voluptatum a.
              Suscipit rem, ut nostrum dignissimos laboriosam, ratione id
              veritatis molestias, possimus facilis commodi. In, dignissimos!
              Accusamus soluta architecto optio quam blanditiis voluptatibus vel
              rerum, rem sit dolorum molestias temporibus enim aut ut autem
              pariatur veritatis distinctio dolor. Odio velit sequi commodi
              eligendi ut. Ab ducimus velit ut eveniet possimus in qui rem
              expedita recusandae.
            </p>
            <p>
              Alias voluptatum dicta repellendus vitae. Necessitatibus voluptate
              tempora hic corrupti accusamus maxime fuga minima unde dolores
              facere. Quam, placeat?
            </p>
          </p>
        </div>
      </Card>
    </Layout>
  );
};

export default About;
